import React from 'react';
import { useParams } from 'react-router-dom';

const DisplayCommentFeed = ({ comments }) => {
    
    const {videoId} = useParams();

    console.log("Log:", {comments})

    return (
        <div>
            {comments && comments
            .filter(comment => (comment.video_id === videoId))
            .map((comment, index) => {
                <div>
                    {comment[index].user.last_name}
                    {comment[index].text}
                </div> 
        }

        )};
        </div>
    )
}
export default DisplayCommentFeed;