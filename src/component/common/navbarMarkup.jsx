import React from "react";
const NavbarMarkup = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <div className="navbar-brand">MIE IoT lab</div>
      <button
        type="button"
        className="btn btn-outline-light"
        onClick={props.onClick}
      >
        Add new
      </button>
    </nav>
  );
};

export default NavbarMarkup;
