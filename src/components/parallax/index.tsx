import * as React from "react";

import "./parallax.css";

interface ParallaxProps {
  backgroundImage?: string;
  children?: object;
}

const Parallax: React.SFC<ParallaxProps> = ({ backgroundImage, children }) => {
  return (
    <div className={"parallax " + backgroundImage}>
      {children}
    </div>
  );
};

export default Parallax;
