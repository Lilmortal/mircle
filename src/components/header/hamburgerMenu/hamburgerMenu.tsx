import * as React from "react";

import "./hamburger.css";

interface HamburgerMenuProps {
  children?: string;
  isMenuActive: boolean
  toggleMenu(): void;
}

const HamburgerMenu = ({children, isMenuActive, toggleMenu}: HamburgerMenuProps) => {
    const isActiveClassName = isMenuActive ? " is-active" : "";

    return (
      <div className="hamburgerMenu">
        <button
          className={`hamburger hamburger--vortex ${isActiveClassName}`}
          onClick={toggleMenu}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
          {children}
        </button>
      </div>
    );
}

export default HamburgerMenu;
