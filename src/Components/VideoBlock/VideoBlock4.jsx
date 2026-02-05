import React from 'react';

const VideoBlock = ({ videoSrc, title, description }) => {
  return (
    <div className="video-block p-4 bg-gray-100 rounded-lg shadow-lg mb-6">
      <video controls className="w-full rounded-md mb-4">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2 className="text-2xl font-bold text-blue-600 mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default VideoBlock;