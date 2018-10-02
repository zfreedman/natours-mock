import React from "react";

class Nav extends React.Component {
  render () {
    return (
      <div className="navigation">
        <input
          className="navigation__checkbox"
          id="navi-toggle"
          type="checkbox"
        />

        <label
          className="navigation__button"
          htmlFor="navi-toggle"
        >
          <span className="navigation__icon">&nbsp;</span>
        </label>
        
        <div className="navigation__background">&nbsp;</div>

        <NavMenu />
      </div>
    );
  }
}

class NavMenu extends React.Component {
  render () {
    const { navItems } = this;
    const navKeys = Object.keys(navItems);

    return (
      <nav className="navigation__nav">
        <ul className="navigation__list">
          {
            navKeys.map((item, i) => (
              <li className="navigation__item" key={item}>
                <a
                  className="navigation__link"
                  // href={`#section-${navItems[item]}`}
                  href="#"
                  onClick={event => this.clickNavItem(event, item)}
                >
                  <span>{`${i}`.padStart(2, "0")}</span>{item}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    );
  }
  
  clickNavItem = (event, key) => {
    // this line is here to dodge the default behaviour on <a href="#">
    // ...which scrolls to the top of the document
    event.preventDefault();

    const element = document.querySelector(
      `.section-${this.navItems[key]}`
    );
    const topPos = element.offsetTop;
    window.scrollTo(0, topPos);
    
    document.querySelector(".navigation__checkbox").checked = false;
  };

  navItems = {
    "about natours": "about",
    "your benefits": "features",
    "popular tours": "tours",
    "stories": "stories",
    "book now": "book",
  };
}


export default Nav;
