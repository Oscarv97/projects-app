# Oscar Vial Projects app

This project is a modern web development starter template built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. It is designed to provide a fast, scalable, and maintainable foundation for building modern web applications.

## Key Features 🚀

- **Vite**: A lightning-fast development server and build tool for modern web apps, ensuring quick startup and HMR (Hot Module Replacement).
- **React + TypeScript**: Strongly typed React components for better developer experience and fewer runtime errors.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development and easy customization.
- **Redux Toolkit**: Centralized state management for predictable and scalable state updates.
- **React Flow Integration**: Interactive flow diagrams with drag-and-drop functionality for visualizing project timelines.
- **Local Storage Persistence**: Timeline and project data are persisted in local storage, ensuring state is maintained across sessions.

## Setup & Installation 🛠️

Follow these steps to set up and run the project locally:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (v16 or higher is recommended).
- **pnpm**: Install `pnpm` globally for faster dependency management:
  ```bash
  npm install -g pnpm
  ```

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/vite-react-tailwind-starter.git
   cd vite-react-tailwind-starter
   ```

2. **Install Dependencies**:
   Use `pnpm` to install all required dependencies:
   ```bash
   pnpm install
   ```

3. **Start the Development Server**:
   Run the development server with hot module replacement (HMR):
   ```bash
   pnpm dev
   ```

4. **Build for Production**:
   Generate a production-ready build:
   ```bash
   pnpm build
   ```

5. **Preview the Production Build**:
   Preview the production build locally:
   ```bash
   pnpm preview
   ```

6. **Run Tests** (if applicable):
   Execute unit tests (if configured):
   ```bash
   pnpm test
   ```

---

## Engineering Highlights ⚙️

### 1. **Performance**
   - **Vite** ensures fast builds and blazing-fast HMR for a smooth development experience.
   - Optimized for modern browsers with ES modules and tree-shaking.

### 2. **Scalability**
   - Modular architecture with reusable React components.
   - Centralized state management using **Redux Toolkit** for predictable state updates.
   - TypeScript ensures type safety and scalability for large codebases.

### 3. **Persistence**
   - Data such as project timelines and node positions are saved in **local storage**, ensuring a seamless user experience even after page reloads.

### 4. **Customizability**
   - **Tailwind CSS** allows for rapid UI prototyping and easy theming.
   - Fully customizable flow diagrams using **React Flow** for interactive visualizations.

### 5. **Developer Experience**
   - Strong TypeScript integration for type safety and better code maintainability.
   - Pre-configured with **pnpm** for fast dependency management.

## Project Structure 📂

```
vite-react-tailwind-starter/
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/            # Page components
│   ├── slices/           # Redux slices for state management
│   ├── utils/            # Utility functions
│   ├── mocks/            # Mock data for development
│   └── App.tsx           # Main application entry point
├── public/               # Static assets
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```