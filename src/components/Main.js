/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Main() {
  return (
    <main>
      <section className="how-it-works">
        <h2>How it works</h2>
        <div className="instructions">
          <div className="description">
            <div className="circle">
              <h3>1</h3>
            </div>
            <h2>Import and Request data seamlessly</h2>
            <h3>
              Import and Request data from customers and partners faster than
              ever. Automatically ingest data from CSVs and Excel files, clean,
              and load them directly to your database - no manual work needed.
              Never clean the same data twice.
            </h3>
            <a href="/">
              Learn how <img src="./images/side-arrow.svg" alt="" />
            </a>
          </div>
          <div className="preview">
            <img
              src="./images/data-request-preview.svg"
              alt="Requesting data from external sources"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
