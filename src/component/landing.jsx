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
    addNew: {
      id: this.randomCode(5),
      state: 0,
      title: "",
      subtitle: "",
      type: "tog",
    },
  };
  componentDidMount = () => {
    const readAllData = fire.database().ref("toggle/");
    readAllData.on("value", (snap) => {
      const data = snap.val();
      try {
        this.setState({ cards: Object.values(data) });
      } catch {
        this.setState({ cards: [] });
      }
    });
  };
  handleToggle = (a, b, c, d, t) => {
    fire
      .database()
      .ref("toggle/" + a)
      .set({
        id: a,
        state: b,
        subtitle: c,
        type: d,
        title: t,
      });
  };
  handleAdd = () => {
    fire
      .database()
      .ref("toggle/" + this.state.addNew.id)
      .set(this.state.addNew);
  };
  toggleSwitch = (device, status, sub, type, title) => {
    return (
      <Switch
        checked={status === "on" ? true : false}
        onChange={(a) =>
          this.handleToggle(
            device,
            status === "on" ? "off" : "on",
            sub,
            type,
            title
          )
        }
        name="checked"
        color="primary"
      />
    );
  };
  handleSlider = (a, b, c, d, t) => {
    fire
      .database()
      .ref("toggle/" + a)
      .set({
        id: a,
        state: b,
        subtitle: c,
        type: d,
        title: t,
      });
  };

  variableSlider = (device, status, sub, type, title) => {
    return (
      <Slider
        value={status}
        onChange={(e, status) => {
          return this.handleSlider(device, status, sub, type, title);
        }}
        aria-labelledby="continuous-slider"
      />
    );
  };
  handleDelete = (e, f) => {
    const deleteConf = window.confirm(
      `You are going to delete device: ${e} uid: ${f}`
    );
    if (deleteConf) {
      fire
        .database()
        .ref("toggle/" + f)
        .remove();
    } else {
    }
  };
  render() {
    return (
      <div>
        {this.renderModal()}
        <NavbarMarkup onClick={this.openModal} />
        <div className="container">
          <div className="row">
            {this.state.cards.map((item) => (
              <div className="col" key={item.id}>
                <CardMarkup
                  uid={item.id}
                  label={item.title}
                  subtitle={item.subtitle}
                  onDelete={(e, f) => this.handleDelete(item.title, item.id)}
                  inputType={
                    item.type === "tog"
                      ? this.toggleSwitch(
                          item.id,
                          item.state,
                          item.subtitle,
                          item.type,
                          item.title
                        )
                      : this.variableSlider(
                          item.id,
                          item.state,
                          item.subtitle,
                          item.type,
                          item.title
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
