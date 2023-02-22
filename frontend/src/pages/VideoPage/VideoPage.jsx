import React from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { useNavigate } from 'react-router-dom';
import './VideoPage.css'
import RelatedVideos from '../RelatedVideos/RelatedVideos';
import Comments from '../../components/Comments/GetVideoComments';




const VideoPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/search')
    }

    return (
        <div className='player-page'>
            <div className='player'>
                <VideoPlayer />
                <div className='button1'>
                    <button onClick={handleClick}>Back to Search</button>
                </div>
            </div>
            <div className='comments'>
                <Comments />
            </div>
            <div className='related-videos'>
                <RelatedVideos />
            </div>
        </div>
    )
}
export default VideoPage;