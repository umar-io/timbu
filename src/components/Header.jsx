import {
  profileImg,
  setting,
  support,
  search,
  whilst,
  cart,
  navLinks,
  check,
  MenuBar,
} from "..";

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [whilstCount, setWhilstCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <header>
        <div className="top-nav">
          <h3>TIMBU</h3>
          <span onClick={toggleMenu}>
            <img src={profileImg} alt="" />
            <p>Olivia Rhye</p>
          </span>
        </div>
        <div className="search-area">
          <img src={setting} alt="" />
          <img src={support} alt="" />
          <div className="input-group">
            <input type="text" placeholder="Search For Anything" />
            <img src={search} alt="" />
          </div>
          <span className="whilst">
            <img src={whilst} alt="" />
            <p>{whilstCount}</p>
          </span>
          <span className="cart">
            <img src={cart} alt="" />
            <p>{cartCount}</p>
          </span>
        </div>
        <nav>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index} className={index === activeIndex ? "active" : ""}>
                <NavLink
                  to={link}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveIndex(index);
                  }}
                >
                  {" "}
                  {index === activeIndex && (
                    <img src={check} alt="Active" className="checker" />
                  )}
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <MenuBar className={isMenuOpen ? "show" : ""} />
      </header>
    </>
  );
};
export default Header;