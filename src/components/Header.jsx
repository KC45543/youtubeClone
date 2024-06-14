import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const timer = setTimeout(() => {
        if (searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]); // Use cached suggestions
        } else {
          getSearchSuggestion();
        }
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery, searchCache]); // Add searchCache to dependencies

  const getSearchSuggestion = async () => {
    try {
      const response = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
      const data = await response.json();
      setSuggestions(data[1]);
      setShowSuggestions(true);

      // Update the cache
      dispatch(
        cacheResults({
          [searchQuery]: data[1], // Cache the results for the current query
        })
      );
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col py-2 bg-white text-white items-center">
      <div className="flex col-span-1 px-4 items-center">
        <img
          onClick={toggleMenuHandler}
          className="h-12 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM3wNiBujTPOA4Yb-3CEh_rW7eZv8ZbFEj1A&s"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-6 ml-4"
            src="data:image/png;base64,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"
            alt="Logo"
          />
        </a>
      </div>
      <div className="flex col-span-10 px-10 mx-10 relative items-center">
        <input
          className="w-[70%] border border-gray-700 rounded-l-full py-2 h-10 px-4 focus:outline-none text-black"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        />
        <button className="border border-gray-700 px-4 h-10 rounded-r-full text-xl">
          🔍
        </button>
        {showSuggestions && suggestions.length > 1 && (
          <div className="absolute top-12 left-10 bg-white text-black py-2 px-4 w-[65%] rounded-lg shadow-lg z-10">
            <ul>
              {suggestions.map((suggestion, index) => (
                <Link key={index} to={`/results?search_query=${suggestion.replace(/ /g, '+')}`}>
                  <li
                    key={index}
                    className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
                  >
                    🔍 {suggestion}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex justify-end px-4 items-center">
        <img
          className="h-10 rounded-full"
          src="https://www.w3schools.com/w3images/avatar2.png"
          alt="User"
        />
      </div>
    </div>
  );
};

export default Header;
