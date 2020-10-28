import { createGlobalStyle } from 'styled-components';

import fontCursive from '../assets/fonts/LaBelleAurore-Regular.woff2';
import fontHeading from '../assets/fonts/JuliusSansOne-Regular.woff2';
import fontBody from '../assets/fonts/MontserratAlternates-Regular.woff2';
import fontBodySemi from '../assets/fonts/MontserratAlternates-SemiBold.woff2';
import fontBodyBold from '../assets/fonts/MontserratAlternates-Bold.woff2';

const Typography = createGlobalStyle`
  @font-face {
    font-family: HeadingCursive;
    src: url(${fontCursive});
  }
  @font-face {
    font-family: HeadingReg;
    src: url(${fontHeading});
  }
  @font-face {
    font-family: Body;
    src: url(${fontBody});
  }
  @font-face {
    font-family: BodySemi;
    src: url(${fontBodySemi});
  }
  @font-face {
    font-family: BodyBold;
    src: url(${fontBodyBold});
  }
  html {
    font-family: Body, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  ul {
    list-style: none;
    padding: 0px;
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--green);
    text-decoration: none;
  }
  .center {
    text-align: center;
  }
`;

export default Typography;
