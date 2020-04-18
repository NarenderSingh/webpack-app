import React from "react";
import { render } from "react-dom";
import "./styles/styles.css";

const Greetings = () => (
  <div>
    <h1>Hello World!</h1>
    <div id="images"></div>
  </div>
);

render(<Greetings />, document.getElementById("target"));
