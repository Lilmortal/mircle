import * as React from "react";
import Registration from "./registration";
import { Header, Footer } from "../components";

import "./mircle.css";

const Mircle = () =>
  <div className="mircle">
    <Header />
    <main>
      <Registration />
    </main>
    <Footer />
  </div>;

export default Mircle;
