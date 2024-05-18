import React from 'react';

const YouTubeEmbed = ({ videoId }) => {

  return (    
    <div className="aspect-video">
        <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
        title="YouTube video"
        ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
