// component with a recipe name & a video player
import React from 'react';

const VideoPlayer = ({ recipe }) => (
  <div className="video-player">
    <div className="video-player-details">
      {`${recipe.link}`}
      <h3>{recipe.name}</h3>
    </div>
    <div className="embed-responsive embed-responsive-16by9">
      <iframe title={recipe.name} className="embed-responsive-item" src={`https://www.youtube.com/embed/${recipe.link}`} allowFullScreen />
    </div>
  </div>
);

VideoPlayer.propTypes = {
  recipe: React.PropTypes.object.isRequired,
};

export default VideoPlayer;
