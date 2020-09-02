import React, { Component } from "react";
import ModalMarkup from "./common/modalMarkup";
import FormMarkup from "./common/formMarkup";
class Modal extends Component {
  closeModal = () => {
    console.log("handle modal pressed");
    this.setState({ isOpen: false });
  };
  openModal = () => {
    console.log("handle modal pressed");
    this.setState({ isOpen: true });
  };
  renderForm = () => {
    return <FormMarkup />;
  };
  renderModal = () => {
    return (
      <ModalMarkup
        isOpen={this.state.isOpen}
        closeModal={this.closeModal}
        formMarkup={this.renderForm()}
      />
    );
  };
}

export default Modal;
