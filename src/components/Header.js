/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const demoBtnStyles = css`
  font-size: 1rem;
  border: 2px solid #ffffff1a;
  border-radius: 6px;
  padding: 0.8em 1.8em;
`;
const btnStyles = css`
  width: 43%;
  font-size: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 1.3em;
`;
const tryForFreeBtnStyles = css`
  background-color: #1775e1;
  font-weight: 600;
  padding: 1em 2em;
  border-radius: 6px;
  font-size: 15px;
`;
const headerStyles = css`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4.4em;

  h1 {
    font-size: 45px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
    line-height: 120%;
    opacity: 0.8;
    margin-bottom: 20px;
  }
  img {
    width: 85%;
  }
`;
export default function Header() {
  return (
    <header>
      <div css={headerStyles} className="hero-container">
        <h1>Import CSV data into databases instantly</h1>
        <h3>
          Dropbase is an external data platform. Clean, validate, and import CSV
          files from customers and partners directly into databases that
          integrate with your favorite analytics tools and data apps.
        </h3>
        <div css={btnStyles} className="buttons">
          <a css={tryForFreeBtnStyles} href="/">
            Try Dropbase for Free
          </a>
          <a css={demoBtnStyles} href="/">
            Request Demo
          </a>
        </div>
        <img src="./images/header-img.svg" alt="" />
      </div>
    </header>
  );
}
