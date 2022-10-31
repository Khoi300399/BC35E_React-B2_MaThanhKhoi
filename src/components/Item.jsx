import React, { Component } from "react";

export default class Item extends Component {
  render() {
    let { data, glassesClick } = this.props;
    return (
      <img
        className="glasses"
        src={data.url}
        alt="..."
        onClick={() => {
          glassesClick(data);
        }}
      />
    );
  }
}
