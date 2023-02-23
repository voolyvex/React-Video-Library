import React, { useEffect, useState } from "react";
import PostUserCommentForm from "../../components/Comments/PostUserCommentForm";
import { useLocation, useParams } from "react-router-dom";
import DisplayCommentFeed from "../../components/Comments/DisplayCommentFeed";
import axios from "axios";



const CommentPage = () => {
  const [comments, setComments] = useState([]);
  const { videoId } = useParams();

  let location = useLocation();

  useEffect(() => {
    getComments(videoId)
    }, [location])

    async function getComments(videoId) {
      try {
          await axios.get(`http://127.0.0.1:8000/api/comments/?video_id=${videoId}`).then(response => setComments([...comments, response.data]))
          
      } catch (error) {
          console.log(error);
      }
  };


  return (
    <div className="comments-container">
      <h3>if logged you can leave a comment</h3>
      <PostUserCommentForm />
      <h3>and see the comments below</h3>
      <DisplayCommentFeed comments={comments} />
      {/* {videos &&
        videos.map((video) => (
          <p>
            {video.items.snippet.title}
          </p>
        ))} */}
      
    </div>
  );
};

export default CommentPage;
