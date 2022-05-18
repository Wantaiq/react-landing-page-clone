/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const numberStyles = css`
  background-color: #1775e1;
  width: 80px;
  height: 80px;
  border-radius: 48px;
  color: #fff;
  font-size: 30px;
  line-height: 44px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.3em;
`;
const sectionTitleStyles = css`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 2em;
`;

const circleImageStyles = css`
  background-color: #3ccf91;
  height: 96px;
  width: 96px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flexRow = css`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 4em;
`;

const solutionsDescriptionStyles = css`
  width: 85%;
  h3 {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 24px;
    letter-spacing: -0.01em;
    font-weight: 600;
    width: 100%;
  }
  .grey-text {
    font-weight: 500;
    letter-spacing: 0;
    font-size: 20px;
    opacity: 0.6;
  }
  a {
    width: 10%;
    justify-content: space-between;
    display: flex;
    font-size: 13px;
    font-weight: 600;
  }
`;

const solutionsSectionStyles = css`
  margin-top: 4em;

  .flex-col > .solutions-title {
    text-align: center;
    width: 80%;
    margin-bottom: 5em;
  }
  .flex-col > .solutions-title > h2 {
    line-height: 110%;
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -0.02em;
  }

  .flex-col > .solutions-title > h3 {
    line-height: 120%;
    font-size: 22px;
    opacity: 0.7;
    margin: 1em;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const howItWorksSectionStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5em;
  .instructions {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 100px;
  }

  .instructions > .description {
    width: 49%;
  }

  .instructions > .description > h2 {
    margin: 1em 0;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: -0.3px;
    line-height: 120%;
  }

  .instructions > .description > a {
    display: flex;
    justify-content: space-evenly;
    width: 22%;
    font-size: 13px;
    font-weight: 600;
  }

  .instructions > .description > h3 {
    font-size: 19px;
    font-weight: 500;
    opacity: 0.6;
    margin: 1em 0;
    line-height: 130%;
  }

  .preview,
  .description {
    width: 50%;
  }
  .preview > img {
    border-radius: 12px;
  }

  .instructions > .order-one {
    order: -1;
  }
`;

const bookDemoStyles = css`
  font-size: 1rem;
  border: 2px solid #ffffff1a;
  border-radius: 6px;
  padding: 0.8em 1.8em;
`;
const buttonStyles = css`
  width: 43%;
  font-size: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto; ;
`;
const tryForFreeBtn = css`
  background-color: #1775e1;
  font-weight: 600;
  padding: 1em 2em;
  border-radius: 6px;
  font-size: 15px;
`;
export default function Main() {
  return (
    <main>
      <section className="how-it-works">
        <article css={howItWorksSectionStyles}>
          <h2 css={sectionTitleStyles}>How it Works</h2>
          <div className="instructions">
            <div className="description">
              <div css={numberStyles} className="circle">
                <h3>1</h3>
              </div>
              <h2>Import and Request data seamlessly</h2>
              <h3>
                Import and Request data from customers and partners faster than
                ever. Automatically ingest data from CSVs and Excel files,
                clean, and load them directly to your database - no manual work
                needed. Never clean the same data twice.
              </h3>
              <a href="/">
                Learn how <img src="./images/side-arrow.svg" alt="" />
              </a>
            </div>
            <div className="preview">
              <img src="./images/preview-image1.svg" alt="" />
            </div>
          </div>
        </article>

        <article css={howItWorksSectionStyles}>
          <div className="instructions">
            <div className="description">
              <div css={numberStyles} className="circle">
                <h3>2</h3>
              </div>
              <h2>
                Clean and validate messy data just the way your systems need it
              </h2>
              <h3>
                With Dropbase, you can clean and validate your data with just a
                few clicks - no engineering required. Use pre-built cleaning and
                validations, or create custom ones to suit your system
                requirements.
              </h3>
              <a href="/">
                Learn how <img src="./images/side-arrow.svg" alt="" />
              </a>
            </div>
            <div className="preview order-one">
              <img src="./images/preview-image2.svg" alt="" />
            </div>
          </div>
        </article>

        <article css={howItWorksSectionStyles}>
          <div className="instructions">
            <div className="description">
              <div css={numberStyles} className="circle">
                <h3>3</h3>
              </div>
              <h2>
                Manage imported data in a secure, scalable, and analytics-ready
                database
              </h2>
              <h3>
                Databases are powerful but complicated to set up, manage, and
                scale without help from engineering or IT. With Dropbase,
                setting up a database is as easy as creating an account. Manage,
                grow, and secure all your data in your database with the
                simplest interface in the market.
              </h3>
              <a href="/">
                Learn how <img src="./images/side-arrow.svg" alt="" />
              </a>
            </div>
            <div className="preview">
              <img src="./images/preview-image3.svg" alt="" />
            </div>
          </div>
        </article>

        <article css={howItWorksSectionStyles}>
          <div className="instructions">
            <div className="description">
              <div css={numberStyles} className="circle">
                <h3>4</h3>
              </div>
              <h2>Connect and integrate with your favorite tools</h2>
              <h3>
                Get the data you need and funnel it where it needs to go. We
                instantly grant database credentials to approved users so you
                can quickly and safely connect your database to your favorite BI
                tools, app builders, customer data pipelines and more.
              </h3>
              <a href="/">
                Learn how <img src="./images/side-arrow.svg" alt="" />
              </a>
            </div>
            <div className="preview order-one">
              <img src="./images/preview-image4.svg" alt="" />
            </div>
          </div>
        </article>

        <article css={howItWorksSectionStyles}>
          <div className="instructions">
            <div className="description">
              <div css={numberStyles} className="circle">
                <h3>5</h3>
              </div>
              <h2>
                Query all of your data just the way you need it, in seconds
              </h2>
              <h3>
                With Dropbase, you can build sophisticated data queries, with
                just a few clicks - no engineering required. Chain multiple
                steps, save them as views, and query a million rows in seconds.
              </h3>
              <a href="/">
                Learn how <img src="./images/side-arrow.svg" alt="" />
              </a>
            </div>
            <div className="preview">
              <img src="./images/preview-image5.svg" alt="" />
            </div>
          </div>
        </article>
        <div css={buttonStyles} className="buttons">
          <a href="/" css={tryForFreeBtn}>
            Try Dropbase for Free
          </a>
          <a href="/" css={bookDemoStyles}>
            Book Demo
          </a>
        </div>
      </section>
      <section className="solutions">
        <article css={solutionsSectionStyles}>
          <div className="flex-col">
            <div className="solutions-title">
              <h2>Solutions</h2>
              <h3>
                Learn how Dropbase offers end-to-end solutions to pain points
                experienced across industries.
              </h3>
            </div>
            <div className="flex-row" css={flexRow}>
              <div className="circle-img" css={circleImageStyles}>
                <img src="./images/circle-image-1.svg" width="48" alt="" />
              </div>
              <div
                className="solution-description"
                css={solutionsDescriptionStyles}
              >
                <h3>Automated Data Operations</h3>
                <h3 className="grey-text">
                  Focus on getting the data you need, not the manual work of
                  collecting and cleaning it. Dropbase automates the process of
                  collecting, cleaning, storing and transforming data in one
                  platform.
                </h3>
                <a href="/">
                  Learn how <img src="./images/side-arrow.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-row" css={flexRow}>
            <div className="circle-img" css={circleImageStyles}>
              <img src="./images/circle-image-2.svg" width="48" alt="" />
            </div>
            <div
              className="solution-description"
              css={solutionsDescriptionStyles}
            >
              <h3>Democratized Data Access</h3>
              <h3 className="grey-text">
                Get a workspace that allows your team to collaborate on data in
                one place. Invite internal and external users to join with
                different user access levels so everyone can work with data
                securely and efficiently.
              </h3>
              <a href="/">
                Learn how <img src="./images/side-arrow.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="flex-row" css={flexRow}>
            <div className="circle-img" css={circleImageStyles}>
              <img src="./images/circle-image-3.svg" width="48" alt="" />
            </div>
            <div
              className="solution-description"
              css={solutionsDescriptionStyles}
            >
              <h3>Turnkey Data Warehousing & Integration</h3>
              <h3 className="grey-text">
                Get a modern, scalable data stack that grows with you. Dropbase
                gives you access to your own database and allows you to quickly
                integrate with your favorite tools.
              </h3>
              <a href="/">
                Learn how <img src="./images/side-arrow.svg" alt="" />
              </a>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
