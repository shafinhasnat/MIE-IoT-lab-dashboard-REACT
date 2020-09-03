import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Landing from "./component/landing";
import Modal from "react-modal";
Modal.setAppElement("body");
function App() {
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
