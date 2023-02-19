import React from 'react';
import { useParams } from 'react-router-dom';
import './VideoPlayer.css'



const VideoPlayer = (props) => {

    const { videoId, title, description } = useParams();

    return (
        <div>
            <h2>{title}</h2>
            <iframe id="ytplayer" type="text/html" width="640" height="360" autoplay="0" frameborder="0" title={props.title}
                src={`https://www.youtube.com/embed/${videoId}?rel=1&fs=1&modestbranding=1`} 
                ></iframe>
            <div className='desc'>
                <h4>{description}</h4>
            </div>
        </div>
    )
}

export default VideoPlayer;