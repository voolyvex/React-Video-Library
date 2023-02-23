import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import "../SearchFeed/SearchFeed.css"
import "./comment.css"
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useParams } from 'react-router-dom';


const PostUserCommentForm = () => {
    const {user, token} = useAuth();
    const { videoId } = useParams();
    const [commentString, setCommentString] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitting comment:", {commentString})
        postUserComment(videoId, commentString);
        }

    async function postUserComment({videoId}, userComment) {

        let newCommentObject = {
            video_id: videoId,
            text: userComment
        };
        console.log("data to post:", {newCommentObject})
        try {
            await axios.post('http://127.0.0.1:8000/api/comments/post/', newCommentObject, { headers: { Authorization: "Bearer " + token } });
            
        } catch (error) {
        console.log(error)
        }
    };

return (
    <div>Comment Feed:
        <form onSubmit={(e) => handleSubmit(e)}>
            <label >
                <textarea className='comment-form' value={commentString}
                onChange={e => setCommentString(e.target.value)}
                required={true} placeholder="Leave a comment..."
                
                />
            </label>
            <button type='submit'>
                <HiArrowNarrowRight className="arrow" />
            </button>
        </form>
    </div>
)
}

export default PostUserCommentForm;
