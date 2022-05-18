/** @jsxImportSource @emotion/react */

import { css, Global } from '@emotion/react';
import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';

const globalStyles = css`
  /* ----- Reset ----- */

  /* Box sizing rules */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margins */
  body,
  h1,
  h2,
  h3,
  h5,
  p {
    margin: 0;
  }

  /* Set core body defaults */

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 24px;
    background-color: #161616;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
  }

  /* Remove list styles on ul, ol elements with a list role,
which suggests default styling will be removed */
  ul,
  li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: inline-block;
  }

  /* Set core root defaults */

  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Make images easier to work with */

  img {
    max-width: 100%;
    display: block;
  }

  /* Remove all animations, transitions and smooth scroll for
people that prefer not to see them */

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    *,
    *::after,
    *::before {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

const wrapperStyles = css`
  width: 70%;
  margin: 0 auto;
`;

export default function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <div css={wrapperStyles} className="wrapper">
        <Navbar />
        <Header />
        <Main />
      </div>
    </>
  );
}
