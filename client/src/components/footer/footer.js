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
            <h5>This is a project on ReactJS by Sai Ram. K</h5>
            <h6>
              Some of the songs cannot be played due to YouTube API copyrights. Try for
	      other songs in case your desired song isn't available. Enjoy!!!
            </h6>
          </div>
        </footer>
      </div>
    );
  }
}
