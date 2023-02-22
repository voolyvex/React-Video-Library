import React from 'react';
import { useParams } from 'react-router-dom';

const DisplayCommentFeed = ({commentFeed}) => {
    const {videoId} = useParams();
    return (
        <div>
        
        {commentFeed && commentFeed.filter(comment => (comment.video_id === {videoId}))
        
        .map((comment, index=commentFeed.id) => 
            {
                return <p>
                    {comment.user.last_name}
                    {commentFeed[index].text}
                </p>;
            }

        )}
        
        </div>
    )
}
export default DisplayCommentFeed;