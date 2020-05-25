import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-10 mx-auto text-center text-title
                    text-uppercase pt-5">
            <h3 className="display-2">404</h3>
            <h3>error</h3>
            <h4>page not found</h4>
            <h5>the requested URL 
                <span className="text-danger">
                  {this.props.location.pathname}
                </span>{" "}
                was not found
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
