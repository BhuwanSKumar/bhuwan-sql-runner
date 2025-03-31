📄 Overview

This is a web-based SQL query runner application built using React. It allows users to:
  1. Select from a set of predefined SQL queries.
  2. Display mock data corresponding to the selected query.
  3. View the query result in a responsive table format.

Key Features:
  1. Query selection using a dropdown menu.
  2. SQL input area (read-only).
  3. Display of table results with mock data.
  4. Smooth UI and fast rendering performance.

 🛠️ Tech Stack
 
Framework:
  1. React with Vite (for faster development and build performance)

Styling:
  1. Styled-components for modular and dynamic styling.
  2. Ant Design for table rendering and dropdown UI.

Packages and Plugins:
  1. styled-components → for custom styling.
  2. antd → for a sleek table UI and dropdowns.
  3.  react-hooks → for state management.

🔥 Page Load Time

Measured Using Lighthouse:
  1. First Contentful Paint (FCP): ~0.9s
  2. Largest Contentful Paint (LCP): ~1.2s
  3. Time to Interactive (TTI): ~1.5s
  4. Total Page Load Time: ~1.5s

 ⚡️ Optimizations
 
To enhance the performance and responsiveness of the app:

  1. Lazy Loading:  Used Vite for faster build and hot-reloading during development.
  2. Optimized Table Rendering: Leveraged Ant Design tables for efficient rendering of mock data.
  3. Efficient State Management: Used useState and useEffect hooks to minimize unnecessary re-renders.
  4. Code Splitting: Optimized the bundle size by splitting larger components into smaller, reusable components.
  5. Lightweight Dependencies: Avoided heavy third-party libraries to keep the app lightweight and snappy.

🛠️ Future Improvements
 
  1. Add pagination for handling larger datasets.
  2. Include syntax highlighting in the SQL query input area.
  3. Add query history to view previously selected queries.
  4. Improve accessibility and add keyboard shortcuts.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
