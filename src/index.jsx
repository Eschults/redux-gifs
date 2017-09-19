// external modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import giphy from 'giphy-api';
import _ from 'lodash';

// internal modules
import Gif from './components/gif';
import SearchBar from './components/search_bar';
import GifList from './components/gif_list';
import '../assets/stylesheets/application.scss';

const API_KEY = 'a4cba98d703e4155862c3b275873082a';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedGif: { giphyId: "xT9IgDEI1iZyb2wqo8" },
      gifs: [],
      color: ''
    };
  }

  searchGifs = (term) => {
    giphy(API_KEY).search(term, (err, response) => {
      if (response && response.data && response.data.length > 0) {
        this.setState({
          selectedGif: { giphyId: response.data[0].id },
          gifs: response.data.slice(1, 11).map(gif => ({ giphyId: gif.id }))
        })
      }
    });
  }

  selectGif = (giphyId) => {
    this.setState({ selectedGif: { giphyId: giphyId }});
  }

  colorFrame = (color) => {
    this.setState({ color });
  }

  render() {
    const searchGifs = _.debounce((term) => { this.searchGifs(term) }, 300);

    return (
      <div>
        <div className="main-scene">
          <SearchBar onQueryChange={searchGifs} colorFrame={this.colorFrame} />
          <div className={`main-frame ${this.state.color}`}>
            <Gif giphyId={this.state.selectedGif.giphyId} />
          </div>
        </div>
        <div className="list-container">
          <GifList
            gifs={this.state.gifs}
            selectGif={this.selectGif}
          />
        </div>
      </div>
    );
  }
}

// render an instance of the component in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
