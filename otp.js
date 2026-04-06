// Check if user has email stored (came from form page)
const userEmail = sessionStorage.getItem('userEmail');
const userName = sessionStorage.getItem('userName');

if (!userEmail) {
    // Redirect back to form if no email found
    window.location.href = 'index.html';
} else {
    // Display masked email
    const emailSentElement = document.getElementById('emailSent');
    const maskedEmail = maskEmail(userEmail);
    emailSentElement.textContent = `OTP sent to ${maskedEmail}`;
}

// Mask email function
function maskEmail(email) {
    const [name, domain] = email.split('@');
    const maskedName = name.substring(0, 2) + '***' + name.substring(name.length - 1);
    return maskedName + '@' + domain;
}

// OTP form submission
document.getElementById('otpForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const otpInput = document.getElementById('otpInput').value;
    const verifyBtn = document.getElementById('verifyBtn');
    const btnText = verifyBtn.querySelector('.btn-text');
    const btnLoader = verifyBtn.querySelector('.btn-loader');

    // Validate OTP format
    if (!/^\d{6}$/.test(otpInput)) {
        showErrorModal();
        return;
    }

    // Disable button and show loader
    verifyBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline';

    try {
        // Verify OTP with backend
        const response = await fetch('http://localhost:3000/api/verify-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail,
                otp: otpInput
            })
        });

        const data = await response.json();

        if (response.ok && data.success) {
            // OTP verified successfully
            sessionStorage.clear();
            window.location.href = 'success.html';
        } else {
            // Wrong OTP
            showErrorModal();
            document.getElementById('otpInput').value = '';

            // Re-enable button
            verifyBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoader.style.display = 'none';
        }
    } catch (error) {
        console.error('Error:', error);
        showErrorModal();

        // Re-enable button
        verifyBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
    }
});

// Show error modal
function showErrorModal() {
    const modal = document.getElementById('otpModal');
    modal.style.display = 'block';
}

// Close modal function
function closeModal() {
    const modal = document.getElementById('otpModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('otpModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Close modal with X button
document.querySelector('.close-modal').onclick = closeModal;

// Resend OTP functionality
document.getElementById('resendBtn').addEventListener('click', async () => {
    const resendBtn = document.getElementById('resendBtn');
    resendBtn.disabled = true;
    resendBtn.textContent = 'Sending...';

    try {
        const response = await fetch('http://localhost:3000/api/resend-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail,
                name: userName
            })
        });

        const data = await response.json();

        if (response.ok) {
            resendBtn.textContent = 'OTP Sent!';
            setTimeout(() => {
                resendBtn.textContent = 'Resend OTP';
                resendBtn.disabled = false;
            }, 3000);
        } else {
            throw new Error('Failed to resend OTP');
        }
    } catch (error) {
        console.error('Error:', error);
        resendBtn.textContent = 'Failed. Try Again';
        setTimeout(() => {
            resendBtn.textContent = 'Resend OTP';
            resendBtn.disabled = false;
        }, 3000);
    }
});

// Only allow numbers in OTP input
document.getElementById('otpInput').addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
});
