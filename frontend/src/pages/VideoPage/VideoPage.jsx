import React, { useState } from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import videos from '../SearchPage/SearchPage';

const VideoPage = (props) => {
    console.log(videos)
    return (
        <div>
            <VideoPlayer />
        </div>
    )
}
export default VideoPage;