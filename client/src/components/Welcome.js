import React from 'react';
import ReactPlayer from "react-player";
import  "./style.css"

function YoutubePlayer() {
  return (
    <div className="player">
      <ReactPlayer
        url="https://youtu.be/z7SWi7ApGs8"
      fluid={false}
      width={1300}
      height={800}
      />
      
      <h1>Start Your Adventure - <a href="http://localhost:3000/map">Click Here</a></h1>
    </div>

    
  );
}

export default YoutubePlayer;