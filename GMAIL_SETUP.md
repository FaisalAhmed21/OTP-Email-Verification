# GMAIL APP PASSWORD SETUP INSTRUCTIONS

Follow these steps to enable real email sending:

## Step 1: Enable 2-Factor Authentication on Gmail

1. Go to your Google Account: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Under "How you sign in to Google", click "2-Step Verification"
4. Follow the steps to enable 2-Factor Authentication (if not already enabled)

## Step 2: Generate App Password

1. Go to: https://myaccount.google.com/apppasswords
2. You may need to sign in again
3. Under "Select app", choose "Mail"
4. Under "Select device", choose "Windows Computer" (or any option)
5. Click "Generate"
6. Google will show you a 16-character password (it looks like: "xxxx xxxx xxxx xxxx")
7. **COPY THIS PASSWORD** - you won't be able to see it again!

## Step 3: Update .env File

Open the .env file and replace the placeholder values:

```env
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASS=xxxx xxxx xxxx xxxx
NODE_ENV=production
PORT=3000
```

**Example:**
```env
EMAIL_USER=johndoe123@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
NODE_ENV=production
PORT=3000
```

## Step 4: Restart Server

Stop the current server (Ctrl+C) and restart:
```bash
npm start
```

## Important Notes:

- The EMAIL_USER should be your full Gmail address (e.g., yourname@gmail.com)
- The EMAIL_PASS should be the 16-character App Password (not your Gmail password)
- Keep spaces in the App Password or remove them (both work)
- NODE_ENV must be set to "production" to send real emails

## Troubleshooting:

If emails don't send:
- Make sure 2FA is enabled on your Google account
- Verify you're using App Password, not regular Gmail password
- Check that EMAIL_USER has @gmail.com at the end
- Ensure there are no extra spaces in the .env file

## Security:

- Never share your .env file
- The .env file is already in .gitignore to prevent accidental commits
- App Passwords are safer than using your actual Gmail password
