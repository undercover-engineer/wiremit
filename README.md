# ⚡️Wiremit Web App

Wiremit is a web app built using React and TypeScript for Zimbabwean parents to send money to their children studying abroad (UK or South Africa). The app has account creation, login, which is implemented using Auth0 for secure authentication, and a dashboard which has the Send Money Form, Carousel implemented using the React slick package for displaying ads, and a paginated transaction list

## 🚀Features
- React 19
- Tailwind CSS version 4
- Vite for fast development and build process
- TanStack Router
- Auth0
- Prettier for code formatting
- ESLint for code linting and quality checks

## 📁Project Structure
```
wiremit/
├── public/ # Static assets
├── src/ # Application source code
├── .env # Environment variables
├── index.html # HTML template
├── package.json # Project metadata and scripts
├── vite.config.ts # Vite configuration
├── tsconfig*.json # TypeScript configuration
└── README.md
```

## 🧰Requirements

To run this project, you must have the following installed:
- Node.js version 20 or higher

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <project-directory>

2. **Install dependencies**:
Ensure you are using Node.js version 20 or higher. If you don't have it, install it from here.
Then, run:
    ```bash
    npm install
    ```

3. **Run the development server**
After the dependencies are installed, start the project with:
    ```bash
    npm run dev
    ```
This will start the development server, and you should be able to access the app at http://localhost:5173.

## ✨Code Formatting and Linting
Prettier: This template is configured with Prettier to automatically format your code. You can format your code by running:
  ```bash
  npm run lint
  ```  
    
ESLint: ESLint is set up to catch any code issues or inconsistencies. You can run ESLint with the following command:
  ```bash
  npm run lint
  ```
It’s recommended to integrate ESLint into your code editor to automatically highlight issues as you work.
If any issues arise, you can fix them using the following command
  ```bash
  npm run lint -- --fix
  ```

## 🔌 Integrations
### 🔐 Auth0 – Authentication
Wiremit is ready to integrate with Auth0, a secure identity platform supporting:

- Email/password and social login (Google, GitHub, etc.)
- Token-based authentication
🔗 Get started with Auth0
The .env in this project provides keys to access Auth0. They are left open for demo purposes only.

## 🎠 React Slick – Carousel Slider
For responsive sliders the project uses React Slick, a powerful  React wrapper for the Slick carousel.

### Features:

- Swipe/drag support
- Autoplay, fade, infinite loop
- Custom arrows, dots, and transitions
🔗 React Slick Documentation

## App Demo
![demo](https://github.com/undercover-engineer/wiremit/blob/master/public/demo.gif)
