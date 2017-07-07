import * as React from "react";

import "./parallax.css";

interface ParallaxProps {
  backgroundImage?: string;
  children?: string;
}

const Parallax = ({ backgroundImage, children }: ParallaxProps) => {
  return (
    <div className="parallax">
      <div className={`parallax__image ${backgroundImage}`} />
      <div className="parallax__text">
        {children}
      </div>
    </div>
  );
};

export default Parallax;
