import React from 'react';



const VideoPlayer = () => {
    return (
        <div>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
                src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1"
                frameborder="0"></iframe>
        </div>
    )
}

export default VideoPlayer;