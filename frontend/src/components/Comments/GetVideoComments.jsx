import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import DisplayCommentFeed from './DisplayCommentFeed';


const GetVideoComments = () => {
    const [user, token] = useAuth();
    const {videoId} = useParams();

    const { commentFeed, setCommentFeed } = useState();

    // if user is logged in - http request to get videos from my backend api 

    return (
        <div>
            <DisplayCommentFeed commentFeed={commentFeed} />
        </div>
    )
}

export default GetVideoComments;