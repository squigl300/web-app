import React, { useEffect, useState } from 'react';

// PostUpdates component
const PostUpdates = () => {
  // State variables for posts and form fields
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to fetch posts from the server
  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts', {
        headers: {
          'Authorization': 'Bearer <token>', // Replace <token> with the actual token
        },
      });
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer <token>', // Replace <token> with the actual token
        },
        body: JSON.stringify({ title, description, tag, mediaUrl }),
      });
      // Clear form fields after successful submission
      setTitle('');
      setDescription('');
      setTag('');
      setMediaUrl('');
      // Refresh posts after creating a new one
      fetchPosts();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  // Render the list of posts and the form to create new posts
  return (
    <div>
      <h2>Post Updates</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.postId}>
            <h3>{post.postTitle}</h3>
            <p>{post.postDescription}</p>
            <p>Tag: {post.tag}</p>
            {post.mediaUrl && <img src={post.mediaUrl} alt="Post Media" />}
            <p>Likes: {post.likesCount}</p>
            <p>Comments: {post.commentCount}</p>
            <p>Posted on: {post.creationTime}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <input
          type="text"
          placeholder="Media URL"
          value={mediaUrl}
          onChange={(e) => setMediaUrl(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default PostUpdates;