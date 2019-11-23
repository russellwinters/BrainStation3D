import React from "react";
// import Switch from "react-switch";
// import Select from "react-select";

export default class CreateNew extends React.Component {
  state = {
    active: "none"
  };

  toggleClass = () => {
    this.setState({ active: "flex" });
  };
  cancel = () => {
    this.setState({ active: "none" });
  };

  render() {
    return (
      <>
        <div onClick={this.toggleClass} className="add-post">
          <button className="add-post__icon" src="">
            APPLY TO BE A SPEAKER
          </button>
        </div>
        <div
          className="modal"
          style={{
            display: this.state.active,
            position: "fixed"
          }}
        >
          <div className="modal__content">
            <h2 className="modal__content-header">Speaker Application Form</h2>
            <div className="modal__content-container">
              <div className="modal__content-container-input">
                <h4 className="modal__content-subheader">First Name</h4>
                <input
                  className="modal__content-input"
                  placeholder=""
                  ref=""
                ></input>
              </div>
              <div className="modal__content-container-input">
                <h4 className="modal__content-subheader">Last Name</h4>
                <input
                  className="modal__content-input"
                  placeholder=""
                  ref=""
                ></input>
              </div>
              <div className="modal__content-container-input">
                <h4 className="modal__content-subheader ">Email Address</h4>
                <input
                  className="modal__content-input"
                  placeholder=""
                  ref=""
                ></input>
              </div>
              <div className="modal__content-container-input">
                <h4 className="modal__content-subheader ">Telephone</h4>
                <input
                  className="modal__content-input"
                  placeholder=""
                  ref=""
                ></input>
              </div>
              <div className="modal__content-container-input">
                <h4 className="modal__content-subheader">City</h4>
                <input
                  className="modal__content-input"
                  placeholder=""
                  ref=""
                ></input>
              </div>
              <div className="modal__content-status">
                <div>
                  <h4 className="modal__content-subheader">Country</h4>
                  <input
                    className="modal__content-input"
                    placeholder=""
                    ref=""
                  ></input>
                </div>
                {/* 
                <Switch
                  onChange={this.handleChange}
                  checked={this.state.checked}
                ></Switch> */}
              </div>
            </div>
            <h4 className="modal__content-subheader">
              Tell us about yourself:{" "}
            </h4>
            <input
              className="modal__content-input  modal__content-input--description"
              placeholder=""
              ref=""
            ></input>
            <div>
              <h4 className="modal__content-subheader">
                What is your TEDx talk about?
              </h4>
              <input
                className="modal__content-input  modal__content-input--description"
                placeholder=""
                ref=""
              ></input>
            </div>
            <div className="modal__content-btn-container">
              <button onClick={this.post} className="modal__content-submit">
                Submit
              </button>
              <button onClick={this.cancel} className="modal__content-submit">
                Cancel
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </>
    );
  }
}
