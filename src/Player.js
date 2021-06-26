import React from "react";
//import ReactPlayer from 'react-player'
//mport Video from "react-h5-video";
//import QierPlayer from 'qier-player';
//import ReactPlayer from 'react-player'
//import Videojs from 'video.js';
import VideoPlayer from 'react-video-js-player';
 

class Player extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  
componentDidMount(){
 const pl = {
     objectFit:"cover" ,
     height:'auto',
     width:'100%',
     
   webkitBackgroundSize:'cover',
  backgroundSize: 'cover',
   } 
}
 render(){
  const videoJsOptions = {
  autoplay: false,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  width: 720,
  height: 300,
  controls: true,
  sources: [
    {
      src: this.props.link,
      type: 'video/mp4',
    },
  ],
};

   return(
   <div>
   <div key={this.props.link}>
 
 <VideoPlayer
    
                    controls={true}
                    src={this.props.link}
                    poster={this.props.poster}
                    width={window.innerWidth} 
                    height={window.innerHeight-window.innerWidth} 
                />
 
  {/* <video height="auto" key={this.props.link} width="100%" poster={this.props.poster} style={this.pl} controls="true" preload="none" autoplay="autoplay">
 
      <source src={this.props.link} type="" media="" />
    </video>*/}
  {/**  <HLSPlayer source={this.props.link} />
**/}
{/**<ReactPlayer url={this.props.link} playing={true} />**/}
 
 </div> 
   </div>
   )
 } 
  
}
export default Player;