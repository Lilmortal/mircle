import * as React from "react";

import "./button.css";

interface ButtonProps {
  children?: string;
}

const Button = ({ children }: ButtonProps) =>
  <button className="button">
    {children}
  </button>;

export default Button;
