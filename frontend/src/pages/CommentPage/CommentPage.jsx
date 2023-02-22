import React from "react";
import PostUserCommentForm from "../../components/Comments/PostUserCommentForm";
import useAuth from "../../hooks/useAuth";


const CommentPage = () => {
  
  const [user, token] = useAuth();

  return (
    <div className="comments-container">
      <h3>if logged you can leave a comment</h3>
      <PostUserCommentForm />
      <h3>and see the comments below</h3>
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
