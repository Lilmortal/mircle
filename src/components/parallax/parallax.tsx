import * as React from "react";

import "./parallax.css";

interface ParallaxProps {
  backgroundImage?: string;
  children?: object;
}

const Parallax = ({ backgroundImage, children }: ParallaxProps) => {
  return (
    <div className="parallax">
      <div className={`parallax__image ${backgroundImage}`} />
      {children}
    </div>
  );
};

export default Parallax;
