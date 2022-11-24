import React, { Component } from "react";
import Gif from "./gif";
import GifList from "./gif_list";
import SearcBar from "./search_bar";
import giphy from "giphy-api";
import giphyApi from "giphy-api";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifsId: "https://giphy.com/embed/ikPoYdohZw7PqyfvvX",
    };

    this.search("homer");
  }

  search = (query) => {
    giphy("CWRw42wn2BctIh3yATVjXbuGfUM59FnG").search(
      {
        q: query,
        rating: "g",
      },
      (err, res) => {
        this.setState({
          gifs: res.data,
        });
      }
    );
  };

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
