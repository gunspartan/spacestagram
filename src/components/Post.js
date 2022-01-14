import React, { useState } from "react";

const Post = ({ item }) => {
  // Process item
  const title = item.title;
  const date = item.date;
  const url = item.url;
  const description = item.explanation;
  const mediaType = item.media_type;

  // Like state
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    // Reverse the like status on click
    setLiked(!liked);
  };

  return (
    <div className='post card'>
      <h3 className='post-title card-header'>{title}</h3>
      {/* Check if media is a image or video */}
      {mediaType === "image" && <img className='post-img card-img' src={url} alt={title} />}
      {/* Youtube video */}
      {mediaType === "video" && <iframe className='post-video card-img-top' src={url} title={title}></iframe>}
      <div className='post-body card-body'>
        <p className='card-text post-description overflow-auto'>{description}</p>
        <div className='card-footer text-muted'>
          <button className='btn btn-primary' onClick={handleLike}>
            {liked ? <i className='fas fa-heart'></i> : <i className='far fa-heart'></i>}
          </button>
          <p className='card-text'>Date of Capture: {date}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
