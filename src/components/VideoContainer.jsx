import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import VideoCardLarge from "./VideoCardLarge";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="m-4 flex flex-wrap ml-6">
      {videos.map((video) =>
        isMenuOpen ? (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            {" "}
            <VideoCardLarge key={video.id} info={video} />
          </Link>
        ) : (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        )
      )}
    </div>
  );
};

export default VideoContainer;
