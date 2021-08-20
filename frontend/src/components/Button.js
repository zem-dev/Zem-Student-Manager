import React from "react";
import "../styles/Button.scss";
const Button = ({ text, active, id }) => {
  return (
    <div id="btn">
      <button id={id} className={`${active ? "active" : ""} `}>
        {text}
      </button>
    </div>
  );
};

export default Button;
