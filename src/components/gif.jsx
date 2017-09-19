import React from 'react';

const Gif = ({ giphyId, handleClick }) => {
  if (!giphyId) {
    return <p>Loading...</p>;
  }

  const url = `https://media1.giphy.com/media/${giphyId}/giphy.gif`;

  return <img alt="" src={url} className="gif" onClick={handleClick} />;
};

export default Gif;
