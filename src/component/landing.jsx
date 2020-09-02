import React from "react";
import fire from "./../fire";
import Switch from "@material-ui/core/Switch";
import CardMarkup from "./common/cardMarkup";
import Slider from "@material-ui/core/Slider";
import NavbarMarkup from "./common/navbarMarkup";
import Modal from "./modal";
class Landing extends Modal {
  state = {
    cards: [],
    isOpen: false,
  };
  componentDidMount = () => {
    const readAllData = fire.database().ref("toggle/");
    readAllData.on("value", (snap) => {
      const data = snap.val();
      this.setState({ cards: Object.values(data) });
    });
  };
  handleToggle = (a, b, c, d) => {
    fire
      .database()
      .ref("toggle/" + a)
      .set({
        id: a,
        state: b,
        subtitle: c,
        type: d,
      });
  };
  handleAdd = (a, b) => {
    fire
      .database()
      .ref("toggle/" + a)
      .set({
        id: a,
        state: "off",
        subtitle: b,
      });
  };
  toggleSwitch = (device, status, sub, type) => {
    return (
      <Switch
        checked={status === "on" ? true : false}
        onChange={(a) =>
          this.handleToggle(device, status === "on" ? "off" : "on", sub, type)
        }
        name="checked"
        color="primary"
      />
    );
  };
  handleSlider = (a, b, c, d) => {
    fire
      .database()
      .ref("toggle/" + a)
      .set({
        id: a,
        state: b,
        subtitle: c,
        type: d,
      });
  };

  variableSlider = (device, status, sub, type) => {
    return (
      <Slider
        value={status}
        onChange={(e, status) => {
          return this.handleSlider(device, status, sub, type);
        }}
        aria-labelledby="continuous-slider"
      />
    );
  };
  render() {
    return (
      <div>
        {this.renderModal()}
        <NavbarMarkup onClick={this.openModal} />
        <div className="container">
          <div className="row">
            {this.state.cards.map((item) => (
              <div className="col">
                <CardMarkup
                  label={item.id}
                  subtitle={item.subtitle}
                  inputType={
                    item.type === "tog"
                      ? this.toggleSwitch(
                          item.id,
                          item.state,
                          item.subtitle,
                          item.type
                        )
                      : this.variableSlider(
                          item.id,
                          item.state,
                          item.subtitle,
                          item.type
                        )
                  }
                  currentStatus={item.state}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
