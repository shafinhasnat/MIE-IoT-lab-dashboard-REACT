import React from "react";
import Modal from "react-modal";
import FormMarkup from "./formMarkup";
const ModalMarkup = (props) => {
  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={props.isOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          className="btn btn-danger"
          onClick={props.closeModal}
          style={{ float: "right" }}
        >
          X
        </button>
        <div className="container">{props.formMarkup}</div>
      </Modal>
    </div>
  );
};

export default ModalMarkup;
