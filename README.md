# React Blockly Template

A minimal and extensible template for building Blockly-powered applications with React.

## Table of Contents

- [React Blockly Template](#react-blockly-template)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [Scripts](#scripts)
  - [Radix UI Components](#radix-ui-components)
  - [License](#license)

## Overview

This project is a starter template for integrating [Blockly](https://developers.google.com/blockly) into your React applications. It is pre-configured with modern frontend technologies—React, Vite, and TypeScript—along with Tailwind CSS for styling and Radix UI components for accessible and customizable UI elements. Use this template as a base to rapidly develop visual programming tools and interactive apps.

## Features

- **Blockly Integration:** Embed Blockly seamlessly using the `react-blockly` component.
- **Modern Development:** Powered by React, Vite, and TypeScript for fast development and type safety.
- **Responsive UI:** Styled with Tailwind CSS for a clean, modern look.
- **Accessible Components:** Includes Radix UI components for accessible and customizable UI elements.
- **Routing & Forms:** Comes with React Router DOM and React Hook Form to handle navigation and form management.
- **Quality Tools:** Pre-configured with ESLint, Prettier, and Tailwind CSS plugins to maintain code quality.

## Tech Stack

- **React** (v18.3.1)
- **Vite** (v6.0.5)
- **TypeScript** (~5.6.2)
- **Blockly** (v11.2.1) & **react-blockly** (v9.0.0)
- **Tailwind CSS** (v3.4.1) with **tailwindcss-animate** and **tailwind-merge**
- **Radix UI Components:**
  - `@radix-ui/react-aspect-ratio` (v1.1.1)
  - `@radix-ui/react-avatar` (v1.1.3)
  - `@radix-ui/react-dialog` (v1.1.5)
  - `@radix-ui/react-dropdown-menu` (v2.1.5)
  - `@radix-ui/react-label` (v2.1.1)
  - `@radix-ui/react-progress` (v1.1.1)
  - `@radix-ui/react-scroll-area` (v1.2.2)
  - `@radix-ui/react-select` (v2.1.5)
  - `@radix-ui/react-separator` (v1.1.1)
  - `@radix-ui/react-slot` (v1.1.1)
  - `@radix-ui/react-toast` (v1.2.6)
- **React Router DOM** (v7.1.5)
- **React Hook Form** (v7.54.2)
- **Additional Utilities:**
  - `clsx` (v2.1.1)
  - `class-variance-authority` (v0.7.1)
  - `lucide-react` (v0.474.0)
  - `sonner` (v1.7.4)

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

Clone the repository:

```bash
git clone https://github.com/heitormbonfim/react-blockly-template.git
cd react-blockly-template
```

Install the dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
```

### Running the Application

Start the development server with:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Scripts

- **dev:** Starts the development server using Vite.
- **build:** Compiles the TypeScript project and builds the app with Vite.
- **lint:** Runs ESLint on the codebase.
- **preview:** Previews the production build.

## Radix UI Components

This template includes the following Radix UI components:

- **Aspect Ratio:** Displays content within a desired ratio. [Documentation](https://www.radix-ui.com/primitives/docs/components/aspect-ratio)
- **Avatar:** Displays an image representation of a user or entity. [Documentation](https://www.radix-ui.com/primitives/docs/components/avatar)
- **Dialog:** A window overlaid on either the primary window or another dialog window, rendering the content underneath inert. [Documentation](https://www.radix-ui.com/primitives/docs/components/dialog)
- **Dropdown Menu:** Displays a menu to the user—such as a set of actions or functions—triggered by a button. [Documentation](https://www.radix-ui.com/primitives/docs/components/dropdown-menu)
- **Label:** Renders an accessible label associated with controls. [Documentation](https://www.radix-ui.com/primitives/docs/components/label)
- **Progress:** Displays an indicator showing the completion progress of a task, typically displayed as a progress bar. [Documentation](https://www.radix-ui.com/primitives/docs/components/progress)
- **Scroll Area:** Visually or semantically separates content. [Documentation](https://www.radix-ui.com/primitives/docs/components/scroll-area)
- **Select:** Displays a list of options for the user to pick from—triggered by a button. [Documentation](https://www.radix-ui.com/primitives/docs/components/select)
- **Separator:** Visually or semantically separates content. [Documentation](https://www.radix-ui.com/primitives/docs/components/separator)
- **Slot:** A component that allows you to pass props and styles to its children. [Documentation](https://www.radix-ui.com/primitives/docs/components/slot)
- **Toast:** Displays a brief message to the user. [Documentation](https://www.radix-ui.com/primitives/docs/components/toast)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
