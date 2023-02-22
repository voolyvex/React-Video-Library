import React from "react";
import PostUserCommentForm from "../../components/Comments/PostUserCommentForm";
import DisplayCommentFeed from "../../components/Comments/DisplayCommentFeed"
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";


const CommentPage = () => {
  
  const [user, token] = useAuth();

  const { videoId = "vw1axveZo5k", title } = useParams();

  return (
    <div className="comments-container">
      <h3>if logged you can leave a comment</h3>
      <PostUserCommentForm user={user}/>
      <h3>and see the comments below</h3>
      <DisplayCommentFeed />
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
