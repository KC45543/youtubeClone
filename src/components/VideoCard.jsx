import React from "react";

const VideoCard = ({ info }) => {
  if (!info) {
    return <div>Loading...</div>;
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="flex flex-col w-64 bg-white rounded-lg overflow-hidden m-2">
      <img
        className="w-full h-36 object-cover"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="p-4">
        <h2 className="text-sm font-semibold text-gray-900">{title}</h2>
        <p className="mt-1 text-xs text-gray-600">{channelTitle}</p>
        <p className="mt-2 text-xs text-gray-600">{statistics.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
