# React + TypeScript + Vite + Tailwind Template

This template provides a minimal setup to get React working in Vite with Tailwind CSS, along with Prettier and ESLint for code formatting and linting.

## Features
- React 19
- Tailwind CSS version 4
- Vite for fast development and build process
- Prettier for code formatting
- ESLint for code linting and quality checks

## Requirements

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

## Code Formatting and Linting
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

## Final Notes
Update Packages Regularly - Always check in on your project to ensure packages aren’t deprecated and that updates don’t break your project
Remove the .git File When Cloning - This ensures that your changes to your new project don’t affect the template’s remote repo
