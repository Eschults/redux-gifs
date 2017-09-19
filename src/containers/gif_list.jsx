import React, { Component } from 'react';
import Gif from '../components/gif';

class GifList extends Component {
  renderList() {
    return this.props.gifs.map(({ giphyId }) => {
      return (
        <Gif
          key={giphyId}
          giphyId={giphyId}
          handleClick={() => 'TODO'}
        />
      );
    });
  };

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}

export default GifList;
