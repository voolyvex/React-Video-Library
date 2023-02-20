import React from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { useNavigate } from 'react-router-dom';
import './VideoPage.css'
import RelatedVideos from '../RelatedVideos/RelatedVideos';




const VideoPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/search')
    }

    return (
        <div className='player-page'>
            <VideoPlayer />
            <div className='button1'>
                <button onClick={handleClick}>Back to Search</button>
            </div>

            <RelatedVideos/>
        </div>
    )
}
export default VideoPage;