import * as React from "react";
import * as MediaQuery from "react-responsive";

import Navigation from "./navigation";
import "./header.css";

const Header = () =>
  <header className="header">
    <span className="header__title">Mircle</span>
    <div className="header__navigation">
      <MediaQuery maxWidth={884}>
        <Navigation isMobile />
      </MediaQuery>
      <MediaQuery minWidth={885}>
        <Navigation isMobile={false} />
      </MediaQuery>
    </div>
  </header>;

export default Header;
