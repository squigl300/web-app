import React, { useEffect, useState } from 'react';

// PostDetails component
const PostDetails = ({ postId }) => {
  // State variables for post details
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [commentText, setCommentText] = useState('');

  // Fetch post details, comments, and likes on component mount and when postId changes
  useEffect(() => {
    fetchPostDetails();
    fetchComments();
    fetchLikes();
  }, [postId]);

  // Function to fetch post details from the server
  const fetchPostDetails = async () => {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        headers: {
          'Authorization': 'Bearer <token>', // Replace <token> with the actual token
        },
      });
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error('Error fetching post details:', error);
    }
  };

  // Function to fetch comments for the post from the server
  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/posts/${postId}/comments`, {
        headers: {
          'Authorization': 'Bearer <token>', // Replace <token> with the actual token
        },
      });
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  // Function to fetch likes for the post from the server
  const fetchLikes = async () => {
    try {
      const response = await fetch(`/api/posts/${postId}/likes`, {
        headers: {
          'Authorization': 'Bearer <token>', // Replace <token> with the actual token
        },
      });
      const data = await response.json();
      setLikes(data);
    } catch (error) {
      console.error('Error fetching likes:', error);
    }
  };

  // Handle form submission for adding a comment
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer <token>', // Replace <token> with the actual token
        },
        body: JSON.stringify({ commentText }),
      });
      // Clear comment input after successful submission
      setCommentText('');
      // Refresh comments after adding a new one
      fetchComments();
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  // Render the post details, comments, likes, and comment form
  return (
    <div>
      {post ? (
        <>
          <h2>{post.postTitle}</h2>
          <p>{post.postDescription}</p>
          <p>Tag: {post.tag}</p>
          {post.mediaUrl && <img src={post.mediaUrl} alt="Post Media" />}
          <p>Likes: {likes.length}</p>
          <h3>Comments:</h3>
          <ul>
            {comments.map((comment) => (
              <li key={comment.commentId}>
                <p>{comment.commentText}</p>
                <p>By: {comment.commenterDisplayName}</p>
                <p>Posted on: {comment.commentTime}</p>
              </li>
            ))}
          </ul>
          <form onSubmit={handleCommentSubmit}>
            <textarea
              placeholder="Write a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
            <button type="submit">Submit Comment</button>
          </form>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetails;