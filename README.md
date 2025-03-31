📄 Overview

This is a web-based SQL query runner application built using React. It allows users to:
 -> Select from a set of predefined SQL queries.
 -> Display mock data corresponding to the selected query.
 -> View the query result in a responsive table format.

Key Features:
 -> Query selection using a dropdown menu.
 -> SQL input area (read-only).
 -> Display of table results with mock data.
 -> Smooth UI and fast rendering performance.

 🛠️ Tech Stack
 
Framework:
 -> React with Vite (for faster development and build performance)

Styling:
 -> Styled-components for modular and dynamic styling.
 -> Ant Design for table rendering and dropdown UI.

Packages and Plugins:
 -> styled-components → for custom styling.
 -> antd → for a sleek table UI and dropdowns.
 -> react-hooks → for state management.

🔥 Page Load Time

Measured Using Lighthouse
 -> First Contentful Paint (FCP): ~0.9s
 -> Largest Contentful Paint (LCP): ~1.2s
 -> Time to Interactive (TTI): ~1.5s
 -> Total Page Load Time: ~1.5s

 ⚡️ Optimizations
 
To enhance the performance and responsiveness of the app:

1. Lazy Loading:  Used Vite for faster build and hot-reloading during development.
2. Optimized Table Rendering: Leveraged Ant Design tables for efficient rendering of mock data.
3. Efficient State Management: Used useState and useEffect hooks to minimize unnecessary re-renders.
4. Code Splitting: Optimized the bundle size by splitting larger components into smaller, reusable components.
5. Lightweight Dependencies: Avoided heavy third-party libraries to keep the app lightweight and snappy.

🛠️ Future Improvements
 
   -> Add pagination for handling larger datasets.
   -> Include syntax highlighting in the SQL query input area.
   -> Add query history to view previously selected queries.
   -> Improve accessibility and add keyboard shortcuts.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
