# Firebase Authentication App

A complete authentication system built with Firebase that includes login, registration, forgot password functionality, and a protected home page.

## Features

- 🔐 **User Registration** - Create new accounts with email and password
- 🔑 **User Login** - Secure authentication with Firebase
- 🔄 **Forgot Password** - Password reset via email
- 🏠 **Protected Home Page** - Dashboard accessible only after login
- 🎨 **Modern UI** - Beautiful, responsive design
- 📱 **Mobile Friendly** - Works on all device sizes

## Setup Instructions

### 1. Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable "Email/Password" provider
4. Get your Firebase configuration:
   - Go to Project Settings > General
   - Scroll down to "Your apps" section
   - Click on the web app icon or add a new web app
   - Copy the Firebase configuration object

### 2. Environment Setup

1. Copy `env.example` to `.env`:
   ```bash
   cp env.example .env
   ```

2. Update `.env` with your Firebase configuration:
   ```env
   FIREBASE_API_KEY=your_actual_api_key
   FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   FIREBASE_PROJECT_ID=your_actual_project_id
   FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   FIREBASE_MESSAGING_SENDER_ID=your_actual_sender_id
   FIREBASE_APP_ID=your_actual_app_id
   ```

### 3. Update Firebase Config in HTML Files

Replace the Firebase configuration in all HTML files (`login.html`, `register.html`, `forgot-password.html`, `home.html`) with your actual configuration:

```javascript
const firebaseConfig = {
    apiKey: "your_actual_api_key",
    authDomain: "your_project_id.firebaseapp.com",
    projectId: "your_actual_project_id",
    storageBucket: "your_project_id.appspot.com",
    messagingSenderId: "your_actual_sender_id",
    appId: "your_actual_app_id"
};
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Run the Application

```bash
# Development mode (with auto-restart)
npm run dev

# Or production mode
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
certification/
├── public/
│   ├── index.html          # Welcome page
│   ├── login.html          # Login page
│   ├── register.html       # Registration page
│   ├── forgot-password.html # Password reset page
│   ├── home.html           # Protected dashboard
│   └── styles.css          # Styling
├── firebase-config.js      # Firebase configuration
├── server.js              # Express server
├── package.json           # Dependencies
├── env.example            # Environment variables template
└── README.md              # This file
```

## Usage

1. **Welcome Page** (`/`) - Landing page with login/register options
2. **Register** (`/register`) - Create a new account
3. **Login** (`/login`) - Sign in to existing account
4. **Forgot Password** (`/forgot-password`) - Reset password via email
5. **Home** (`/home`) - Protected dashboard (requires authentication)

## Security Features

- ✅ Email validation
- ✅ Password strength requirements (minimum 6 characters)
- ✅ Password confirmation on registration
- ✅ Protected routes (home page requires authentication)
- ✅ Automatic logout and redirect on authentication state change
- ✅ Comprehensive error handling with user-friendly messages

## Customization

### Styling
Edit `public/styles.css` to customize the appearance:
- Colors and gradients
- Typography
- Layout and spacing
- Responsive breakpoints

### Functionality
- Add more user fields in registration
- Implement email verification
- Add user profile management
- Integrate with Firestore for user data storage

## Troubleshooting

### Common Issues

1. **Firebase configuration errors**
   - Ensure all Firebase config values are correct
   - Check that Email/Password authentication is enabled in Firebase Console

2. **CORS errors**
   - Make sure your domain is added to Firebase authorized domains
   - Check that the server is running on the correct port

3. **Authentication not working**
   - Verify Firebase project settings
   - Check browser console for error messages
   - Ensure network connectivity

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Authentication**: Firebase Authentication
- **Styling**: Custom CSS with modern design principles

## License

MIT License - feel free to use this project for learning and development purposes.
