import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULT_API, YOUTUBE_VIDEO_DETAILS_API } from "../utils/constants";
import VideoCardLarge from "./VideoCardLarge";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getVideos = async () => {
      try {
        // Fetch initial search results to get videoIds
        const response = await fetch(`${YOUTUBE_SEARCH_RESULT_API}${searchQuery}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const videoIds = data.items.map(item => item.id.videoId).join(",");

        // Fetch detailed video information including statistics
        const statsResponse = await fetch(`${YOUTUBE_VIDEO_DETAILS_API}${videoIds}`);

        if (!statsResponse.ok) {
          throw new Error(`HTTP error! status: ${statsResponse.status}`);
        }

        const statsData = await statsResponse.json();
        setVideos(statsData.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError(error.message);
      }
    };

    if (searchQuery) {
      getVideos();
    }
  }, [searchQuery]);

  return (
    <div className="m-4 flex flex-wrap ml-6">
      {error ? (
        <p>Error: {error}</p>
      ) : (
        videos.length > 0 ? (
          videos.map((video) => (
            <Link key={video.id} to={"/watch?v=" + video.id} >
            <VideoCardLarge info={video} />
            </Link>
          ))
        ) : (
          <p>No results found</p>
        )
      )}
    </div>
  );
};

export default SearchResult;
