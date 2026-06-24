# Manager App

A cross-platform mobile application for managing employees and shift scheduling, built with React Native and Firebase.

---

## What the App Does

Manager is a mobile tool designed for small business owners or team leads who need a simple way to manage their staff. The app lets you log in securely, add new employees, and assign each one a weekly shift — all from your phone.

### App Flow

When you open the app, you land on the **Login screen**. Enter your email and password and tap **Login**. The app tries to sign you in with Firebase — if your account doesn't exist yet, it automatically creates one for you, so there's no separate registration step.

Once you're logged in, you're taken to the **Employees screen**. This is the main hub of the app, where your employee list will appear. A navigation bar at the top contains an **Add** button in the top-right corner.

Tapping **Add** opens the **Create Employee screen**, a form where you fill in three things:

- **Name** — the employee's full name (e.g. "Amit")
- **Phone** — their contact number (e.g. "054-391-2344")
- **Shift** — which day of the week they work, chosen from a scrollable picker: Monday through Sunday

Once the form is filled out, you tap **Create** to save the employee.

---

## Screens

### Login Screen
- Email and password fields
- A single **Login** button — creates your account automatically if one doesn't exist
- Shows a loading spinner while Firebase authenticates
- Displays an inline error message in red if login or account creation fails

### Employees Screen
- The main screen after logging in
- Shows the list of employees (in progress)
- **Add** button in the nav bar to open the Create Employee form

### Create Employee Screen
- **Name** field — text input
- **Phone** field — text input
- **Shift** picker — dropdown selector with all seven days of the week
- **Create** button to submit the form

---

## Current Status

| Feature | Status |
|---|---|
| Email/password login | Working |
| Auto account creation on first login | Working |
| Auth error messages | Working |
| Navigation between screens | Working |
| Employee creation form (UI) | Working |
| Saving employees to Firebase | In progress |
| Displaying employee list | In progress |
| Edit / delete employees | Not yet started |

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI | React Native 0.58.6 |
| Navigation | react-native-router-flux 4.0.6 |
| State | Redux 4.0.1 + redux-thunk |
| Backend | Firebase 5.9.1 (Auth + Realtime Database) |
| Testing | Jest 24 |
| Build (Android) | Gradle 4.7, SDK 28 |

---

## Project Structure

```
src/
├── App.js                  # Root component — Firebase init, Redux store setup
├── Router.js               # Scenes: Login → EmployeeList → EmployeeCreate
├── components/
│   ├── LoginForm.js        # Email/password auth form with error + spinner
│   ├── EmployeeCreate.js   # New employee form (name, phone, shift picker)
│   ├── EmployeeList.js     # Employee list view (in progress)
│   ├── actions/
│   │   ├── AuthActions.js  # loginUser, emailChanged, passwordChanged
│   │   ├── EmployeeActions.js  # employeeUpdate
│   │   └── types.js        # Action type constants
│   └── common/             # Reusable UI: Button, Card, CardSection, Header, Input, Spinner
└── reducers/
    ├── AuthReducer.js      # Manages: email, password, user, loading, error
    └── EmployeeFormReducer.js  # Manages: name, phone, shift
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- **Android:** Android Studio + Android SDK 28
- **iOS:** macOS with Xcode installed

### Installation

```bash
git clone https://github.com/Amitambr/Manager.git
cd Manager
npm install
```

### Running the app

```bash
# Start the Metro bundler
npm start

# Android (requires a connected device or running emulator)
npx react-native run-android

# iOS (macOS only)
npx react-native run-ios
```

### Running tests

```bash
npm test
```

---

## Firebase Setup

The app uses Firebase for authentication and the Realtime Database. To connect your own Firebase project:

1. Create a project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Email/Password** under Authentication → Sign-in methods
3. Replace the config object in `src/App.js`:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
};
```

---

## License

MIT — see [LICENSE](LICENSE)
