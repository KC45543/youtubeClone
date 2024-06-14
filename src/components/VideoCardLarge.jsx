import React from "react";

const VideoCardLarge = ({ info }) => {
  if (!info) {
    return <div>Loading...</div>;
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="flex flex-col w-72 bg-white rounded-lg overflow-hidden m-2">
      <img
        className="w-full h-48 object-cover"
        src={thumbnails.high.url}
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

export default VideoCardLarge;
