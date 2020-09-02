import React from "react";
const FormMarkup = () => {
  return (
    <form action="" className="mt-5">
      <div class="form-group">
        <label for="type">type</label>
        <select class="form-control">
          <option>Toggle</option>
          <option>Variable</option>
        </select>
      </div>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Title"
        ></input>
      </div>
      <div class="form-group">
        <label for="subtitle">Subtitle</label>
        <input
          type="text"
          class="form-control"
          id="subtitle"
          placeholder="subtitle"
        ></input>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormMarkup;
