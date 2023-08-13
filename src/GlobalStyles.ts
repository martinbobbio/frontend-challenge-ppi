import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* Start of reset CSS */

/* Box sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Margins and padding */
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}

/* Typography */
body {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
}

/* Links */
a {
  color: inherit;
  text-decoration: underline;
}

/* Lists */
ol,
ul {
  list-style: none;
}

/* Forms */
input,
button,
textarea,
select {
  font-family: inherit;
  font-size: inherit;
}

button {
  cursor: pointer;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Images */
img {
  max-width: 100%;
  height: auto;
}

/* Miscellaneous */
:focus {
  outline: none;
}

/* End of reset CSS */

/* Start of base CSS */ 


:root {
  font-family: Inter, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color: #000;
  background-color: #fff;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

/* End of base CSS */

`;

export default GlobalStyles;
