import React, { Component } from "react";
import Gif from "./gif";
import GifList from "./gif_list";
import SearcBar from "./search_bar";

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearcBar />
          <div className="selected-gif">
            <Gif id="https://giphy.com/embed/ikPoYdohZw7PqyfvvX" />
          </div>
        </div>
        <div className="right-scene">
          <GifList />
        </div>
      </div>
    );
  }
}

export default App;
