import React from "react";
const ButtonMarkup = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default ButtonMarkup;
