import React, { Component } from "react";

export default class Content extends Component {
  render() {
    let { name, url, desc } = this.props;
    return (
      <div className="container ">
        <div className="row mt-5 align-items-center">
          <div className="col-6 text-center">
            <img
              className=" shadow bg-body rounded"
              src="./image/model.jpg"
              alt="..."
              width={300}
              height={350}
            />
          </div>
          <div id="glassesModel" className="col-6 text-center">
            <img
              className=" shadow bg-body rounded"
              src="./image/model.jpg"
              alt="..."
              width={300}
              height={350}
            />
            <img className="glasses" src={url} alt="..." />
            <div className="glassesInfo px-2">
              <h3 className="mb-2">{name}</h3>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
