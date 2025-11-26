# The X Collective - Landing Page

This project is a React-based landing page for **The X Collective**, designed with a premium, minimalist aesthetic (Alo/Soho House style).

## Prerequisites

You need to have **Node.js** installed on your computer to run this project.
If you don't have it, download it from [nodejs.org](https://nodejs.org/).

## Getting Started

1.  **Install Dependencies**:
    Open your terminal, navigate to this folder (`xcolletive-web`), and run:
    ```bash
    npm install
    ```

2.  **Run the Development Server**:
    Start the local server to view the site:
    ```bash
    npm run dev
    ```
    Then open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

## Project Structure

*   `src/components`: Contains all the UI sections (Hero, Manifesto, Pathways, etc.).
*   `src/App.jsx`: The main application component that assembles the page.
*   `src/index.css`: Global styles and variables (colors, typography).

## Tech Stack

*   **React**: UI Framework
*   **Vite**: Build tool (fast and modern)
*   **Tailwind CSS** (via CDN or standard CSS): *Note: This project currently uses Vanilla CSS with utility classes for maximum customizability, mimicking Tailwind-like utility classes in `index.css` where needed, but primarily custom styled for the premium feel.*
*   **Framer Motion**: For smooth animations and scroll reveals.
*   **Lucide React**: For icons.
