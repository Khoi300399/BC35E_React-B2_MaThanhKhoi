import React, { Component } from "react";
import Content from "./Content.jsx";
import Header from "./Header.jsx";
import Item from "./Item.jsx";
import dataGlasses from "../../src/data/dataGlasses.json";
export default class BaiTapReactBuoi2 extends Component {
  renderData = () => {
    return dataGlasses.map((data, index) => {
      return (
        <div className="col-2" key={index}>
          <Item data={data} glassesClick={this.glassesClick} />
        </div>
      );
    });
  };

  state = {
    data: {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./image/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  glassesClick = (rData) => {
    this.setState({
      data: rData,
    });
  };

  render() {
    let { name, url, desc } = this.state.data;
    return (
      <div className="wrapper">
        <Header />
        <Content name={name} url={url} desc={desc} />
        <div
          id="item"
          className="container row align-items-center mt-5 m-auto shadow bg-body rounded"
        >
          {this.renderData()}
        </div>
      </div>
    );
  }
}
