import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
const CardMarkup = (props) => {
  return (
    <div>
      <div className="card-style shadow p-3 mb-5 bg-white rounded">
        <div className="card border border-dark" style={{ width: "18rem" }}>
          <div className="card-body">
            <div className="cross">
              <CancelIcon
                fontSize="default"
                style={{ color: "#9a0036" }}
                onClick={props.onDelete}
              />
            </div>
            <h5 className="card-title">{props.label}</h5>
            <h6 className="card-subtitle mb-0 text-muted">{props.subtitle}</h6>
            <sup>UID: {props.uid}</sup>
          </div>
          <div className="card-footer text-white bg-light">
            <div className="">{props.inputType}</div>
          </div>
          <div
            className={
              "card-footer text-white " +
              (props.currentStatus === "on"
                ? "bg-success"
                : props.currentStatus > 0
                ? "bg-success"
                : "bg-danger")
            }
          >
            Current status: {props.currentStatus}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMarkup;
