# OTP Verification Web Application

A complete web application with email-based OTP (One-Time Password) verification system. Users fill out a form, receive an OTP via email, verify it, and get access to a success page.

## Features

- ✨ Beautiful, responsive UI with gradient themes
- 📧 Email-based OTP verification
- 🔒 Secure OTP generation and validation
- ⏱️ OTP expiration (5 minutes)
- 🔄 Resend OTP functionality
- 📱 Mobile-friendly design
- ✅ Form validation
- 🎉 Animated success page

## Project Structure

```
.
├── index.html          # Main form page
├── otp.html           # OTP verification page
├── success.html       # Success confirmation page
├── styles.css         # Styling for all pages
├── app.js             # Client-side JavaScript for form page
├── otp.js             # Client-side JavaScript for OTP page
├── server.js          # Node.js Express backend
├── package.json       # NPM dependencies
├── .env.example       # Example environment variables
└── README.md          # This file
```

## Prerequisites

- Node.js (v14 or higher)
- NPM or Yarn
- Gmail account (or other email service)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Email Settings

Create a `.env` file in the root directory (copy from `.env.example`):

```bash
cp .env.example .env
```

Edit the `.env` file and add your email credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=3000
NODE_ENV=development
```

#### For Gmail Users:

1. Enable 2-Factor Authentication on your Google Account
2. Generate an App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the generated 16-character password
   - Use this as `EMAIL_PASS` in your `.env` file

#### For Other Email Services:

Modify the transporter configuration in `server.js`:

```javascript
const transporter = nodemailer.createTransport({
    host: 'smtp.your-provider.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
```

### 3. Start the Server

```bash
npm start
```

Or for development with auto-restart:

```bash
npm run dev
```

The server will start at `http://localhost:3000`

### 4. Open the Application

Open your browser and navigate to:
```
http://localhost:3000/index.html
```

## How It Works

### Step 1: User Registration Form
- User fills in:
  - Email address
  - Full name
  - Phone number
  - Age
  - Gender (dropdown)
  - Life thoughts (text area)
- On submit, a 6-digit OTP is generated and sent to the provided email

### Step 2: OTP Verification
- User is redirected to OTP verification page
- User enters the 6-digit OTP received via email
- System validates the OTP
- If correct: User proceeds to success page
- If incorrect: Modal popup shows error message

### Step 3: Success Page
- Congratulations message displayed
- User can return to home page

## API Endpoints

### POST `/api/send-otp`
Send OTP to user's email

**Request Body:**
```json
{
    "email": "user@example.com",
    "name": "John Doe",
    "phone": "1234567890",
    "age": 25,
    "gender": "male",
    "lifeThoughts": "Life is beautiful"
}
```

**Response:**
```json
{
    "success": true,
    "message": "OTP sent successfully"
}
```

### POST `/api/verify-otp`
Verify the OTP entered by user

**Request Body:**
```json
{
    "email": "user@example.com",
    "otp": "123456"
}
```

**Response:**
```json
{
    "success": true,
    "message": "OTP verified successfully"
}
```

### POST `/api/resend-otp`
Resend a new OTP to user

**Request Body:**
```json
{
    "email": "user@example.com",
    "name": "John Doe"
}
```

### GET `/api/health`
Health check endpoint

## Security Features

- OTP expires after 5 minutes
- OTPs are stored in memory (use Redis in production)
- Email validation
- Input sanitization
- Session-based page access control

## Customization

### Change OTP Length
Edit the `generateOTP()` function in `server.js`:

```javascript
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit OTP
}
```

### Change OTP Expiration Time
Modify the expiration time in `server.js`:

```javascript
expiresAt: Date.now() + 10 * 60 * 1000  // 10 minutes
```

### Customize Email Template
Edit the email HTML in the `mailOptions.html` section in `server.js`

### Change Color Scheme
Modify the CSS gradient colors in `styles.css`:

```css
background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%);
```

## Production Deployment

For production deployment:

1. Use a proper database or Redis for OTP storage
2. Set up SSL/HTTPS
3. Use environment variables for sensitive data
4. Implement rate limiting
5. Add CAPTCHA for spam prevention
6. Use a professional email service (SendGrid, AWS SES, etc.)

## Troubleshooting

### Email not sending?
- Check your email credentials in `.env`
- For Gmail, ensure App Password is used (not regular password)
- Check firewall/antivirus settings
- Verify SMTP settings for your email provider

### OTP not working?
- Check browser console for errors
- Verify server is running on port 3000
- Check network requests in browser DevTools

### Page not loading?
- Ensure server is running
- Check that all files are in the same directory
- Verify file paths in HTML files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

