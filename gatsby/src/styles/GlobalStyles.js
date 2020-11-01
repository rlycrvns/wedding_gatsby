import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2E2E2E;
    --white: #fff;
    --bg: #fff5f4;
    --rust: #cd6647;
    --pale-green: #c4d0cc;
    --pink: #fee5e0;
    --green: #718878;
    --grey: #707070;
  }
  html {
    background: var(--bg);
    background: linear-gradient(135deg, var(--bg) 50%, var(--white) 100%);
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--pink);
    color: black;
    border: 2px solid var(--green);
    padding: 0.6rem 1rem;
    border-radius: 2.5rem;
    box-shadow: 0px 0px 8px 1px var(--black);
    cursor: pointer;
    transition: all 0.2s;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--pale-green) var(--white);
  }

  body::-webkit-scrollbar-track {
    background: var(--white);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--pale-green) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  .nav-open.nav-open {
    transform: translateY(0);
  }
`;

export default GlobalStyles;
