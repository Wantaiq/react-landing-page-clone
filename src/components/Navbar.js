/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const ctaStyles = css`
  background-color: #1775e1;
  font-weight: 600;
  padding: 0.6em 3em;
  border-radius: 6px;
  font-size: 15px;
`;
const searchStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const navStyles = css`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0.8em 0;
  background-color: #161616;
  z-index: 10;

  ul,
  ul > li,
  .navbar-controls,
  nav {
    display: flex;
    align-items: center;
  }

  ul > li {
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.32px;
    padding: 0 0.7em;
    opacity: 0.8;
  }

  ul > li > img {
    margin-left: 0.25em;
    padding-top: 0.2em;
  }

  .navbar-controls > a {
    font-weight: 500;
    font-size: 13px;
    letter-spacing: -0.32px;
    margin-left: 2.5em;
  }
`;

export default function Navbar() {
  return (
    <div className="navbar" css={navStyles}>
      <nav role="navigation">
        <div className="logo">
          <a href="/">
            <img alt="" src="./images/logo.svg" />
          </a>
        </div>
        <ul>
          <li>
            How it Works
            <img src="./images/down-arrow.svg" width="10px" alt="" />
          </li>
          <li>
            Solutions <img src="./images/down-arrow.svg" width="10px" alt="" />
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            About <img src="./images/down-arrow.svg" width="10px" alt="" />
          </li>
        </ul>
      </nav>
      <div className="navbar-controls">
        <a css={searchStyles} href="/">
          <img src="./images/search-icon.svg" alt="" />
          Search
        </a>
        <a href="/">Sign in</a>
        <a css={ctaStyles} href="/" className="cta-btn">
          Try for Free
        </a>
      </div>
    </div>
  );
}
