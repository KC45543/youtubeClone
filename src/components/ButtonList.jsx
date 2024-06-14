import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const list = [
  "All",
  "Live",
  "Soccer",
  "Songs",
  "Gaming",
  "Cricket",
  "News",
  "Cooking",
  "SMW",
  "Valentines",
  "React",
  "Javascript",
  "DSA",
];

const ButtonList = () => {
  return (
    <div className="flex ml-6">
      {list.map((item) => (
        <Link key={item} to={`/results?search_query=${item}`}>
        <Button name={item} />
        </Link>
      ))}
    </div>
  );
};

export default ButtonList;
