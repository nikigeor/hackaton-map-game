import React from 'react';
import ReactPlayer from "react-player";
import { Link } from "react-router-dom"
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
      
      <h1>Start Your Adventure - <Link to="/map">
        Click Here</Link></h1>
    </div>

    
  );
}

export default YoutubePlayer;