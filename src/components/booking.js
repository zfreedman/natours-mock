import React from "react";

class Booking extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      controls: {
        "tour-group-size": {
          "small-tour-group": true,
          "large-tour-group": false,
        }
      },
      inputs: {
        // this block is non-alphabetical because Object.keys
        // is later used to maintain this order
        name: { placeholder: "full name", type: "text", val: "" },
        email: { placeholder: "email", type: "email", val: "" },
      },
    };
  }

  render () {
    const { email, name } = this.state.inputs;
    const inputs = [email, name];

    return (
      <section className="section-book">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <form action="#" className="form">
                <div className="u-margin-bottom-medium">
                  <h2 className="heading-secondary">
                    Start booking now
                  </h2>
                </div>

                {this.renderInputs()}
                {this.renderControls()}

                <div className="form__group">
                  <button className="btn btn--green">
                    Next Step &rarr;
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  handleControlChange = key => {
    // TGS = tour group size
    const newControlTGSState = {
      ...this.state.controls["tour-group-size"]
    };

    for (let tgsKey in newControlTGSState) {
      newControlTGSState[tgsKey] = tgsKey === key;
    }
    // console.log(newControlTGSState);

    this.setState(prevState => ({
      ...prevState,
      controls: {
        ...prevState.controls,
        "tour-group-size": newControlTGSState,
      }
    }));
  };

  handleInputChange = (key, value) => {
    this.setState(prevState => ({
      ...prevState,
      inputs: {
        ...prevState.inputs,
        [key]: {
          ...prevState.inputs[key],
          val: value
        }
      },
    }));
  };

  renderControls = () => {
    const { controls } = this.state;
    return Object.keys(controls).map(controlKey => {

      const controlGroup = controls[controlKey];

      return (
        <div className="form__group u-margin-bottom-medium" key={controlKey}>
          {
            Object.keys(controlGroup).map(controlGroupKey => {
              const checked = controlGroup[controlGroupKey];

              return (
                <div
                  className="form__radio-group"
                  key={controlGroupKey}
                >
                  <input
                    className="form__radio-input"
                    checked={checked ? "checked" : ""}
                    id={controlGroupKey}
                    name={controlKey}
                    onChange={
                      () => this.handleControlChange(controlGroupKey)
                    }
                    type="radio"
                  />

                  <label
                    className="form__radio-label"
                    htmlFor={controlGroupKey}
                  >
                    <span className="form__radio-button"></span>
                    {
                      controlGroupKey.split("-").map((str, i) => (
                        str === ""
                          ? ""
                          : (i !== 0
                              ? str
                              : str[0].toUpperCase() + str.substr(1)
                            )
                      )).join(" ")
                    }
                  </label>
                </div>
              );
            })
          }

          {/* <div className="form__radio-group">
            <input
              className="form__radio-input"
              id="small"
              name="tour-group-size"
              type="radio"
            />

            <label htmlFor="large" className="form__radio-label">
              Large tour group
            </label>
          </div> */}
        </div>
      );
    });

  };

  renderInputs = () => {
    const { inputs } = this.state;

    return Object.keys(inputs).map(key => {
      const { placeholder, type, val } = inputs[key];
      const id = placeholder.split(" ").join("-");
      const properText = placeholder.split(" ").map(str => {
        return str.length === 0
          ? str
          : str[0].toUpperCase() + str.substr(1)
      }).join(" ");

      return (
        <div className="form__group" key={id}>
          <input
            autoComplete="off"
            className="form__input"
            id={id}
            onChange={
              (event) => this.handleInputChange(key, event.target.value)
            }
            placeholder={properText}
            required={true}
            type={type}
            value={val}
          />

          <label htmlFor={id} className="form__label">
            {properText}
          </label>
        </div>
      );
    });
  };
};

export default Booking;
