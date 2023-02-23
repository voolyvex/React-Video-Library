import React from 'react';
import { useParams } from 'react-router-dom';

const DisplayCommentFeed = ({ comments }) => {
    
    const {videoId} = useParams();

    console.log("Log:", {comments})

    return (
        <div>
            {console.log(comments)}
            {comments && comments
            .map((comment) => {
                <div key={comment.id}>
                 
                    <h1>
                        {comment.text}
                    </h1>
                </div> 
        }

        )};
        </div>
    )
}
export default DisplayCommentFeed;