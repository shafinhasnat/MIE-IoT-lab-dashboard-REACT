import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
const NavbarMarkup = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <div className="navbar-brand">MIE IoT lab</div>
      <button
        type="button"
        className="btn btn-outline-light btn-sm"
        onClick={props.onClick}
      >
        <AddCircleIcon />
        Add new device
      </button>
    </nav>
  );
};

export default NavbarMarkup;
