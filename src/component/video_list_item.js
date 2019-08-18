import React from 'react';

const VideoListItem =({video,onVideoSelect}) =>{
    //console.log(video);
    //const video =props.video;
const ImageUrl=video.snippet.thumbnails.default.url;



    return (
        <div className="list-group-item">
    <li onClick={() => onVideoSelect(video)} className ="list-group-item">
       <div className="video-list media">
       <div className ="media-left">
       <img className ="media-object" src={ImageUrl}/>
       </div>

       <div className ="media-body">
       <div className ="media-heading">{video.snippet.title} </div>
       </div>
       </div> 
    </li>
    </div>
);
};


export default VideoListItem;