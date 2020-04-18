import React from "react";
import { render } from "react-dom";
import "./styles/styles.css";

const About = () => (
  <div>
    <h1>Hello About!</h1>
  </div>
);

render(<About />, document.getElementById("target"));
