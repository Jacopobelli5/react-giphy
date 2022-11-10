import React, { Component } from "react";
import Gif from "./gif";
import GifList from "./gif_list";
import SearcBar from "./search_bar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifsId: "https://giphy.com/embed/ikPoYdohZw7PqyfvvX",
    };
  }
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearcBar />
          <Gif id={this.state.selectedGifsId} />
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
