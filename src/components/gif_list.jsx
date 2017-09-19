import React from 'react';
import Gif from './gif';

const GifList = ({ gifs, selectGif }) => {
  const renderList = () => {
    return gifs.map(({ giphyId }) => {
      return (
        <Gif
          key={giphyId}
          giphyId={giphyId}
          handleClick={() => selectGif(giphyId)}
        />
      );
    });
  };

  return (
    <div className="gif-list">
      {renderList()}
    </div>
  );
};

export default GifList;