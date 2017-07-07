import * as React from "react";
import * as MediaQuery from "react-responsive";

import "./header.css";
import "./hamburger.css";

interface HamburgerMenuProps {
  children?: string;
}

const HamburgerMenu = ({ children }: HamburgerMenuProps) =>
  <div className="hamburgerMenu">
    <button className="hamburger hamburger--vortex is-active">
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
      {children}
    </button>
  </div>;

interface NavigationProps {
  className: string;
}

const Navigation = ({ className }: NavigationProps) =>
  <nav className={className}>
    <ul>
      <li>
        <a href="">About Mircle</a>
      </li>
      <li>
        <a href="">SIGN UP</a>
      </li>
      <li>
        <a href="">SIGN UP</a>
      </li>
      <li>
        <a href="">SIGN UP</a>
      </li>
      <li>
        <a href="">SIGN UP</a>
      </li>
      <li>
        <a href="">SIGN UP</a>
      </li>
    </ul>
  </nav>;

const Header = () =>
  <header>
    <span className="title">Mircle</span>
    <MediaQuery query="(max-width: 884px)">
      <HamburgerMenu>Menu</HamburgerMenu>
      <Navigation className="navigation__mobile" />
    </MediaQuery>
    <MediaQuery query="(min-width:885px)">
      <Navigation className="navigation__desktop" />
    </MediaQuery>
  </header>;

export default Header;
