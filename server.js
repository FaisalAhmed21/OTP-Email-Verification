const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// In-memory storage for OTPs (in production, use Redis or database)
const otpStorage = new Map();

// Check if running in test mode (no real email)
const isTestMode = process.env.NODE_ENV === 'test' || !process.env.EMAIL_USER || process.env.EMAIL_USER === 'test@example.com';

// Configure email transporter
let transporter;
if (!isTestMode) {
    transporter = nodemailer.createTransport({
        service: 'gmail', // You can change to other email services
        auth: {
            user: process.env.EMAIL_USER, // Your email
            pass: process.env.EMAIL_PASS  // Your email password or app-specific password
        }
    });
}

// Alternative: Ethereal Email for testing (no real emails sent)
// Uncomment this for testing without real email credentials
/*
nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create test account:', err);
        return;
    }

    transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
            user: account.user,
            pass: account.pass
        }
    });

    console.log('Test account created:', account.user);
});
*/

// Generate random 6-digit OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Send OTP endpoint
app.post('/api/send-otp', async (req, res) => {
    try {
        const { email, name, phone, age, gender, lifeThoughts } = req.body;

        // Validate required fields
        if (!email || !name) {
            return res.status(400).json({
                success: false,
                message: 'Email and name are required'
            });
        }

        // Generate OTP
        const otp = generateOTP();

        // Store OTP with expiration (5 minutes)
        otpStorage.set(email, {
            otp: otp,
            expiresAt: Date.now() + 5 * 60 * 1000, // 5 minutes
            userInfo: { name, phone, age, gender, lifeThoughts }
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER || 'noreply@example.com',
            to: email,
            subject: 'Your OTP Verification Code',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                        <h1 style="color: white; margin: 0;">OTP Verification</h1>
                    </div>
                    <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
                        <p style="font-size: 16px; color: #333;">Hello ${name},</p>
                        <p style="font-size: 16px; color: #333;">Thank you for submitting your information. Please use the following OTP to verify your email:</p>

                        <div style="background: white; padding: 20px; text-align: center; margin: 30px 0; border-radius: 8px; border: 2px dashed #667eea;">
                            <h2 style="color: #667eea; font-size: 36px; margin: 0; letter-spacing: 8px;">${otp}</h2>
                        </div>

                        <p style="font-size: 14px; color: #666;">This OTP will expire in 5 minutes.</p>
                        <p style="font-size: 14px; color: #666;">If you didn't request this code, please ignore this email.</p>

                        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
                            <p style="font-size: 12px; color: #999;">This is an automated email. Please do not reply.</p>
                        </div>
                    </div>
                </div>
            `
        };

        // Send email or log OTP in test mode
        if (isTestMode) {
            // Test mode - just log OTP to console
            console.log('\n==============================================');
            console.log('📧 TEST MODE - OTP Generated');
            console.log('==============================================');
            console.log('Email:', email);
            console.log('Name:', name);
            console.log('OTP:', otp);
            console.log('Expires in: 5 minutes');
            console.log('==============================================\n');

            res.json({
                success: true,
                message: 'OTP sent successfully (TEST MODE - Check server console for OTP)'
            });
        } else {
            // Production mode - send real email
            const info = await transporter.sendMail(mailOptions);

            console.log('OTP sent to:', email, '| OTP:', otp);
            console.log('Message ID:', info.messageId);

            res.json({
                success: true,
                message: 'OTP sent successfully'
            });
        }

    } catch (error) {
        console.error('Error sending OTP:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send OTP. Please check your email configuration.'
        });
    }
});

// Verify OTP endpoint
app.post('/api/verify-otp', (req, res) => {
    try {
        const { email, otp } = req.body;

        // Validate required fields
        if (!email || !otp) {
            return res.status(400).json({
                success: false,
                message: 'Email and OTP are required'
            });
        }

        // Get stored OTP data
        const storedData = otpStorage.get(email);

        if (!storedData) {
            return res.status(400).json({
                success: false,
                message: 'OTP not found or expired'
            });
        }

        // Check if OTP expired
        if (Date.now() > storedData.expiresAt) {
            otpStorage.delete(email);
            return res.status(400).json({
                success: false,
                message: 'OTP has expired'
            });
        }

        // Verify OTP
        if (storedData.otp === otp) {
            // OTP is correct
            otpStorage.delete(email); // Remove used OTP

            console.log('OTP verified successfully for:', email);

            res.json({
                success: true,
                message: 'OTP verified successfully'
            });
        } else {
            // OTP is incorrect
            res.status(400).json({
                success: false,
                message: 'Invalid OTP'
            });
        }

    } catch (error) {
        console.error('Error verifying OTP:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to verify OTP'
        });
    }
});

// Resend OTP endpoint
app.post('/api/resend-otp', async (req, res) => {
    try {
        const { email, name } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required'
            });
        }

        // Generate new OTP
        const otp = generateOTP();

        // Update stored OTP
        const existingData = otpStorage.get(email) || {};
        otpStorage.set(email, {
            otp: otp,
            expiresAt: Date.now() + 5 * 60 * 1000,
            userInfo: existingData.userInfo || {}
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER || 'noreply@example.com',
            to: email,
            subject: 'Your New OTP Verification Code',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                        <h1 style="color: white; margin: 0;">New OTP Code</h1>
                    </div>
                    <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
                        <p style="font-size: 16px; color: #333;">Hello ${name || 'User'},</p>
                        <p style="font-size: 16px; color: #333;">You requested a new OTP. Here is your verification code:</p>

                        <div style="background: white; padding: 20px; text-align: center; margin: 30px 0; border-radius: 8px; border: 2px dashed #667eea;">
                            <h2 style="color: #667eea; font-size: 36px; margin: 0; letter-spacing: 8px;">${otp}</h2>
                        </div>

                        <p style="font-size: 14px; color: #666;">This OTP will expire in 5 minutes.</p>
                    </div>
                </div>
            `
        };

        // Send email or log in test mode
        if (isTestMode) {
            // Test mode - just log OTP to console
            console.log('\n==============================================');
            console.log('📧 TEST MODE - NEW OTP Generated (Resend)');
            console.log('==============================================');
            console.log('Email:', email);
            console.log('Name:', name || 'User');
            console.log('OTP:', otp);
            console.log('Expires in: 5 minutes');
            console.log('==============================================\n');

            res.json({
                success: true,
                message: 'New OTP sent successfully (TEST MODE - Check server console for OTP)'
            });
        } else {
            // Production mode - send real email
            await transporter.sendMail(mailOptions);

            console.log('New OTP sent to:', email, '| OTP:', otp);

            res.json({
                success: true,
                message: 'New OTP sent successfully'
            });
        }

    } catch (error) {
        console.error('Error resending OTP:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to resend OTP'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
    console.log(`\n==============================================`);
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`==============================================`);

    if (isTestMode) {
        console.log(`\n⚠️  TEST MODE ACTIVE`);
        console.log(`   OTPs will be logged to this console (no real emails sent)`);
        console.log(`   To use real email, edit .env file with your credentials:\n`);
        console.log(`   EMAIL_USER=your-email@gmail.com`);
        console.log(`   EMAIL_PASS=your-app-password`);
        console.log(`   NODE_ENV=production\n`);
    } else {
        console.log(`\n✅ PRODUCTION MODE`);
        console.log(`   Email configured: ${process.env.EMAIL_USER}`);
        console.log(`   OTPs will be sent to user emails\n`);
    }

    console.log(`📱 Open your browser: http://localhost:${PORT}/index.html`);
    console.log(`==============================================\n`);
});
