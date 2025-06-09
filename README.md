# REM Frontend Project

This project is a **React-based frontend application** built with **TypeScript**, **Vite**, **Jest**, and **Zustand**. It addresses several technical coding challenges to create a scalable, maintainable, and user-friendly application with a focus on **clean code**, **reusable components**, and **robust UI/UX**. The application is deployed on **Vercel** and hosted on **CodeSandbox** for easy access and testing.

---

## 🚀 Deployed Links

- **Vercel**: [https://rem-frontend-gx22.vercel.app/](https://rem-frontend-gx22.vercel.app/)
- **CodeSandbox**: [https://codesandbox.io/p/github/thoanguyen2907/rem-frontend/main?import=true](https://codesandbox.io/p/github/thoanguyen2907/rem-frontend/main?import=true)

---

## 🛠 Tech Stack

- **React**: Component-based UI library for building interactive interfaces.
- **TypeScript**: Static typing for enhanced code reliability and maintainability.
- **Vite**: Fast build tool and development server for modern web applications.
- **Jest**: Testing framework for unit tests to ensure component reliability.
- **Zustand**: Lightweight state management for predictable state handling.

> **Notes**:
>
> - For larger projects, Zustand can be replaced with Redux for more complex state management.
> - React Router is planned for future implementation to handle navigation for multiple pages.

---

## ✅ Technical Coding Challenges

### 1. 🗂 Organized File and Folder Structure

---

### 2. 🎨 AI-Generated Attractive and Responsive UI

- Leveraged **Tailwind CSS** for rapid, responsive styling.
- Used AI to generate modern layouts with consistent typography, spacing, and color schemes.
- Ensured **mobile-first design** with media queries and flexible grid layouts.

---

### 3. ♻️ Reusable Components with Generics

- **Card**: Flexible component that accepts any data shape and renders based on props. Supports render diffent jsx elements based on purposes and data
- **Button**: Customizable with text and event handlers.

---

### 4. 🌗 Theme Management for Future Scalability

- Implemented a **React context** to provide theme data based on business purpose on season: Christmas, New Year (can validate only admin change set theme on season later). User can change to dark/light mode

---

### 5. ⏳ Skeleton Loading and Mock Delay for UI/UX

- Displayed skeleton placeholders while data loads.
- Simulated real-world loading behavior with mock delays. In real-project, there is no need to mock delay time

---

### 6. 🧪 Unit Testing with Jest

- Wrote unit tests for reusable components and context logic.
- Focused on edge cases, prop variations, and state changes.

---

## 👥 Team Workflow with Git and GitHub

- 📥 Checkout Feature Branch after pulling latest changes
- Work on your feature branch
- When finish, run **npm build** to avoid failure if being merged
- Open Pull Request, in PR, it should include:
  - Details of changes made (e.g., new components, bug fixes).
  - Reference to the Trello task (or other task management tool) for tracking.
  - Any additional context for reviewers (e.g., screenshots, testing step)
  - Request review from team members or the project leader.

This workflow ensures collaboration is streamlined, changes are tracked, and code quality is maintained through reviews.
