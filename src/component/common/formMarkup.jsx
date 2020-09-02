import React from "react";
const FormMarkup = (props) => {
  return (
    <form className="mt-5">
      <h2>Add new device:</h2>
      <div className="form-group">
        <label htmlFor="type">type</label>
        <select
          className="form-control"
          id="type"
          value={props.value.type}
          onChange={props.onChange}
        >
          <option value="tog">Toggle</option>
          <option value="var">Variable</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="id">ID</label>
        <input
          type="text"
          className="form-control"
          id="id"
          placeholder="id"
          value={props.value.id}
          onChange={props.onChange}
          disabled
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="title"
          value={props.value.title}
          onChange={props.onChange}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="subtitle">Subtitle</label>
        <input
          type="text"
          className="form-control"
          id="subtitle"
          placeholder="subtitle"
          value={props.value.subtitle}
          onChange={props.onChange}
        ></input>
      </div>
      <button className="btn btn-dark" onClick={props.onSubmit}>
        Submit
      </button>
    </form>
  );
};

export default FormMarkup;
