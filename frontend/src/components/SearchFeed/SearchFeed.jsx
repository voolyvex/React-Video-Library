import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SearchFeed.css'




const SearchFeed = ({videos}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/video/');
    }

    return (
        <div className='search-feed'>
            
            {videos.map((video, index) =>
                <Link to={`/video/${videos[index].id.videoId}/${videos[index].snippet.title}/${videos[index].snippet.description}`}>
                <div className='item' onClick={handleClick} title={video.snippet.title}>
                    <img width='250px' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                    {video.snippet.title}
                    
                </div>
                </Link>
            )}

        </div>
    )
}
export default SearchFeed;