import { createGlobalStyle } from 'styled-components'

/**
 * Global dark-theme styles.
 *
 * Bootstrap handles the grid + utilities (data-bs-theme="dark" is set on <html>),
 * while this file defines the custom design tokens and the base look & feel.
 */
export const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #0b0b12;
    --surface: #14141f;
    --surface-2: #1b1b2a;
    --border: rgba(255, 255, 255, 0.08);
    --accent: #8b5cf6;
    --accent-2: #ec4899;
    --text: #eceaf6;
    --muted: #9b97b0;
    /* Glassmorphism tokens */
    --glass-bg: rgba(20, 20, 31, 0.7);
    --glass-border: rgba(255, 255, 255, 0.1);
    --glass-blur: 20px;
    --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--bg);
    color: var(--text);
    font-family: 'Segoe UI', system-ui, -apple-system, 'Helvetica Neue', sans-serif;
    overflow-x: hidden;
  }

  ::selection {
    background: var(--accent);
    color: #fff;
  }

  /* Offset section anchors so the fixed navbar never covers headings */
  section[id] {
    scroll-margin-top: 84px;
  }

  /* Slim custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--surface-2);
    border-radius: 8px;
  }
`
