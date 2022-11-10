import React, { Component } from "react";

export class Gif extends Component {
  render() {
    const src = `${this.props.id}`;
    return (
      <div className="selected-gif">
        <iframe
          src={src}
          width="480"
          height="266"
          frameBorder="0"
          className="giphy-embed gif "
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default Gif;
