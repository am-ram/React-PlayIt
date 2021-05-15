import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <div className="container-fluid p-0 m-0">
        <footer>
          <div
            className="p-3 text-light"
            style={{ textAlign: "center", backgroundColor: "#3F51B5" }}
          >
            <h5></h5>
            <h6>Beta App: Some Songs not playable due to copyright.</h6>
          </div>
        </footer>
      </div>
    );
  }
}
