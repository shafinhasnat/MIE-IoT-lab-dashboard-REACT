import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import logo from "./mieiotlogo.png";
const NavbarMarkup = (props) => {
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark mb-3">
      <div className="navbar-brand">
        <img
          src={logo}
          width="109"
          height="30"
          class="d-inline-block align-top"
          alt=""
        />
      </div>
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
