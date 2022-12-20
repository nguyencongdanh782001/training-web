import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

import "./style.scss";

interface propStyes {
  textColor: string;
  position: string;
}

const Navbar = ({ textColor, position }: propStyes) => {
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <header className={`header-nav ${position}`}>
      <nav className="nav-container container">
        <div className="logo">
          <p className={`logo-text ${textColor}`}>abdularfat</p>
        </div>
        <ul className="list-nav">
          <li className="nav-item">
            <Link to="#" className={`nav-link ${textColor}`}>
              concerts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className={`nav-link ${textColor}`}>
              weddings
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className={`nav-link ${textColor}`}>
              potraits
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className={`nav-link ${textColor}`}>
              shop
            </Link>
          </li>
          <li className="nav-item">
            <span
              className={`nav-link ${textColor}`}
              onClick={() => setIsDropdown((prev) => !prev)}
            >
              book
              <i>
                <BiChevronDown />
              </i>
            </span>
            {isDropdown && (
              <ul className="child-list-nav">
                <li className="child-nav-item">
                  <Link to="#" className={`child-nav-link ${textColor}`}>
                    About
                  </Link>
                </li>
                <li className="child-nav-item">
                  <Link to="#" className={`child-nav-link ${textColor}`}>
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className="toggle-aria">
          <button className="toggle-button">
            <GiHamburgerMenu className="toggle-icon" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
