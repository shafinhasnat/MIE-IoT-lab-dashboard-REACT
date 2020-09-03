import React, { Component } from "react";
import ModalMarkup from "./common/modalMarkup";
import FormMarkup from "./common/formMarkup";
class Modal extends Component {
  closeModal = () => {
    this.setState({ isOpen: false });
  };
  randomCode = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  openModal = () => {
    this.setState({ isOpen: true, newId: this.randomCode(5) });
  };
  handleChange = (e) => {
    const addNew = { ...this.state.addNew };
    addNew[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ addNew });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const refreshForm = {
      id: this.randomCode(5),
      state: 0,
      title: "",
      subtitle: "",
      type: "tog",
    };
    this.handleAdd();
    this.setState({ addNew: refreshForm });
    this.closeModal();
  };
  renderForm = (value) => {
    return (
      <FormMarkup
        value={value}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  };
  renderModal = () => {
    return (
      <ModalMarkup
        isOpen={this.state.isOpen}
        closeModal={this.closeModal}
        formMarkup={this.renderForm(this.state.addNew)}
      />
    );
  };
}

export default Modal;
