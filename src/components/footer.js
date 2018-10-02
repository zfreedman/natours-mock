import React from "react";

export default class Footer extends React.Component {
  footerListItems = [
    "company",
    "contact us",
    "careers",
    "privacy policy",
    "terms",
  ];

  render () {
    const { footerListItems } = this;
    return (
      <footer className="footer">
        <FooterTop />
        <FooterBottom footerListItems={footerListItems} />
      </footer>
    );
  }
}

const FooterBottom = ({ footerListItems, }) => (
  <div className="row">
    <FooterBottomLeft footerListItems={footerListItems} />
    <FooterBottomRight />
  </div>
);

const FooterBottomLeft = ({ footerListItems }) => {
  return (
    <div className="col-1-of-2">
      <div className="footer__navigation">
        <ul className="footer__list">
          {
            footerListItems.map(item => (
              <li className="footer__item" key={item}>
                <a href="" className="footer__link">{item}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

const FooterBottomRight = () => {
  const originalAuthor = "Jonas Schmedtmann";

  return (
    <div className="col-1-of-2">
      <p className="footer__copyright">
        Built
        by <a href="#" className="footer__link">Zach Freedman</a> based
        off of a website design originally created
        by <a href="#" className="footer__link">{originalAuthor}</a>.
        Copyright &copy; by {originalAuthor}. You are 100% allowed to
        use this webpage for both personal and commercial use, but NOT
        to claim it as your own design. A credit to the original
        author, {originalAuthor}, is highly appreciated!
      </p>
    </div>
  );
};

const FooterTop = () => (
  <div className="footer__logo-box">

    {/* below is art direction */}
    <picture className="footer__logo">
      <source
        srcSet={`
          ${require("../img/logo-green-small-1x.png")} 1x,
          ${require("../img/logo-green-small-2x.png")} 2x
        `}
        media="(max-width: 37.5em)">
      </source>

      <img
        alt="Full logo"
        className="footer__logo"
        src={require("../img/logo-green-2x.png")}
        srcSet={`
          ${require("../img/logo-green-1x.png")} 1x,
          ${require("../img/logo-green-2x.png")} 2x
        `}
      />
    </picture>

    {/* below is density switching */}
    {/* <img
      alt="Full logo"
      className="footer__logo"
      srcSet={`
        ${require("../img/logo-green-1x.png")} 1x,
        ${require("../img/logo-green-2x.png")} 2x
      `}
    /> */}
  </div>
);
