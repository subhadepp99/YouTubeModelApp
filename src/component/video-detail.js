import React from 'react';


const VideoDetail = ({video}) =>{

if(!video)
{
return     <div>Loading..</div>
}

    const videoID=video.id.videoId;
    const VideoUrl=`https://www.youtube.com/embed/${videoID}`;
return(
<div>
    <div className="video-detail">
        <iframe  src={VideoUrl}></iframe>
        </div>
        <div >
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
        </div>
</div>
);
};

export default VideoDetail;
    


