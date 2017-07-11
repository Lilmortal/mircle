import * as React from "react";

import HamburgerMenu from "../hamburgerMenu";
import "./navigation.css";

interface NavigationProps {
  isMobile: boolean;
}

interface NavigationStates {
  isMenuActive: boolean;
}

class Navigation extends React.Component<NavigationProps, NavigationStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      isMenuActive: false
    };
  }

  toggleMenu = (): void => {
    this.setState({ isMenuActive: !this.state.isMenuActive });
  };

  render() {
    let navigationClassName = this.props.isMobile
      ? "navigation__mobile"
      : "navigation__desktop";

    navigationClassName += this.state.isMenuActive
      ? " navigation__mobile-active"
      : "";

    const hamburgerMenu =
      this.props.isMobile &&
      <HamburgerMenu
        isMenuActive={this.state.isMenuActive}
        toggleMenu={this.toggleMenu}
      >
        Menu
      </HamburgerMenu>;

    return (
      <div>
        {hamburgerMenu}
        <nav className={navigationClassName}>
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
        </nav>
      </div>
    );
  }
}

export default Navigation;
