import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../SearchFeed/SearchFeed.css'
import { BsCaretRightFill } from "react-icons/bs";


const RelatedFeed = ({ relatedVideos }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/video/');
    }

    return (
        <div >
            <h1 className='rel-title'>Related Videos</h1>
            {relatedVideos && relatedVideos.map((video, index) =>
                <Link to={`/video/${relatedVideos[index].id.videoId}/${relatedVideos[index].snippet.title}`}>
                    <div className='item' onClick={handleClick} title={video.snippet.title}>
                        <img width='250px' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
                        <BsCaretRightFill className='icon' />
                        {video.snippet.title}
                    </div>
                </Link>
            )}

        </div>
    )
}
export default RelatedFeed;