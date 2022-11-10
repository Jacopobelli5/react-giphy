import React, { Component } from "react";

export class Gif extends Component {
  render() {
    const src = `${this.props.id}`;
    return (
      <div>
        <iframe
          src={src}
          width="480"
          height="266"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/nfl-sports-football-sport-ikPoYdohZw7PqyfvvX">
            via GIPHY
          </a>
        </p>
        ;
      </div>
    );
  }
}

export default Gif;
