# Milestone 1: Scaffolding and Initial Setup for Listing Page

## About the Project

The ALX Listing App project aims to scaffold and lay the foundational structure for a modern Airbnb clone. This initial milestone focuses on setting up a well-organized and scalable codebase using Next.js, TypeScript, TailwindCSS, and ESLint. By establishing a clean folder structure, reusable components, and adhering to best practices, the project ensures a solid starting point for building a dynamic, responsive, and user-friendly property listing page.

## Learning Objectives

This milestone is designed for professional developers to strengthen their expertise in modern web application development. By completing this milestone, you'll:

- Gain hands-on experience scaffolding a Next.js project tailored for production readiness.
- Implement TypeScript for type safety and reusable interfaces to enhance code maintainability and robustness.
- Configure TailwindCSS for building responsive, accessible, and visually appealing UI components.
- Structure a Next.js project following industry-standard best practices, ensuring scalability and readability.
- Create foundational reusable components and organize assets effectively for real-world applications.

## Requirements

To successfully complete this milestone, you must meet the following prerequisites:

- Basic knowledge of Next.js, React, and TypeScript.
- Familiarity with TailwindCSS and modern styling techniques.
- Understanding of ESLint and its role in maintaining code quality.
- Proficiency in organizing and structuring projects for scalability.

## Technical Requirements:

- Next.js version 13+.
- Node.js version 16+ installed locally.
- Text editor (e.g., VS Code) with TypeScript and TailwindCSS extensions installed.

## Key Highlights

1. **Project Setup:**

   - Scaffold a Next.js application named `alx-listing-app` with TypeScript, ESLint, and TailwindCSS enabled.
   - Configure TailwindCSS using a minimal and clean configuration (`tailwind.config.js` and `globals.css`).

2. **Folder Structure and Reusability:**

   - Establish a clean folder structure, including directories for `components/`, `interfaces/`, `constants/`, and `public/assets/`.
   - Create reusable components such as Card and Button for modularity and scalability.

3. **TypeScript Integration:**

   - Define TypeScript interfaces (`CardProps`, `ButtonProps`, etc.) in `interfaces/index.ts` to ensure type safety and code consistency.

4. **Asset Management:**

   - Organize assets, including images and SVGs, under `public/assets/` for easy access and maintenance.
   - From this [Figma Mockup](https://www.figma.com/design/E2BRqdPcKkrnX6hLGPto8Z/Project-Airbnb?node-id=1-4&p=f&t=mIqZjNloB6pIxVbX-0)

5. **Documentation and Run Instructions:**

   - Create a comprehensive `README.md` file with details about the project, its goals, folder structure, and steps to run the project locally.
   - Verify the project setup by running it locally and ensuring all configurations work seamlessly.

## Tasks

### 0. Create Project Structure and Integrate Key Tools in Next.js App

**mandatory**

**Objective:**

The objective of this milestone is to scaffold the Airbnb clone project by creating a basic Next.js app with the correct folder structure, TypeScript integration, and essential project configurations. By completing this milestone, you will set up the foundation needed to build the listing page, create reusable components, and establish a well-structured, maintainable codebase.

Examine the following [Figma file](https://www.figma.com/design/E2BRqdPcKkrnX6hLGPto8Z/Project-Airbnb?node-id=1-4&p=f&t=GEEnpw8osrRSR1Vc-0) for asset extraction.

**Instructions:**

#### Create the Next.js App:

Scaffold a new Next.js application named `alx-listing-app` with the following options:

- Enable TypeScript to enforce type safety across the project.

- Enable ESLint for linting and maintaining clean, readable code.

- Install TailwindCSS for styling and building responsive UIs.

- Disable the AppRouter (use the Pages Router instead).

- Do not create a `src` directory (place files directly under the project root).

- Do not customize the default import alias

```terminal
npx create-next-app@latest alx-listing-app --typescript --tailwind --eslint --no-app-router --no-src-dir
```

#### Confirm and Configure Tailwind CSS:

- Confirm the content of your `tailwind.config.js:`

```javascript
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
```

- In `styles/globals.css`, import Tailwind’s base, components, and utilities only, all other content should be removed

```css
@tailwind 
base;
@tailwind components;
@tailwind utilities;
```

#### Create the Required Folder Structure:

Create the following components and directories to establish the project foundation:

- `components/common/Card.tsx`: This file will define a reusable `Card` component that will be used across the project to display information about various properties.

- `components/common/Button.tsx`: This file will define a reusable Button component, which will be used for actions like “Book Now,” “Details,” etc.

- `interfaces/index.ts`: Define all TypeScript interfaces related to the project. Start by creating placeholder interfaces for `CardProps` and `ButtonProps`.

- `constants/index.ts`: Set up constants to store any reusable data or strings such as API URLs, configuration settings, or UI text

#### Handle Assets:

Export all assets (images, SVGs, etc.) into the `public/assets` folder:

- Create a folder `public/assets` and place the necessary images and SVG files that will be used across the project (such as placeholder property images).

- Ensure assets are organized for easy access.

#### Create a README File:

In the root directory of the project, create a README file. The README file should include:

- The project title: ALX Listing App.

- A brief description of the project and its goals (e.g., creating an Airbnb clone listing page).

- A brief explanation of the project structure, including the purpose of the `components/`, `interfaces/`, `constants/`, and `public/assets` directories.

- Instructions on how to run the project locally, including installing dependencies and running the development server (`npm run dev`).

#### Run and Verify:

Once all the files are created, run the project locally using the following command:

Open the project in your browser at `http://localhost:3000` to ensure the Next.js app is running without errors.

**Repo:**

- **GitHub repository**: **alx-listing-app**
- **File**: [pages/index.tsx](./pages/index.tsx), [components/common/Card.tsx](./components/common/Card.tsx), [components/common/Button.tsx](./components/common/Button.tsx), [interfaces/index.ts](./interfaces/index.ts), [constants/index.ts](./constants/index.ts), [public/assets/](./public/assets/), [README.md](./README.md)
