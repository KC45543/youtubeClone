import React from "react";

const commentsData = [
  {
    name: "Karan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolore!",
    replies: [],
  },
  {
    name: "Karan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolore!",
    replies: [
      {
        name: "Karan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolore!",
        replies: [],
      },
      {
        name: "Karan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolore!",
        replies: [
          {
            name: "Karan",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolore!",
            replies: [],
          },
          {
            name: "Karan",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolore!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Karan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolore!",
    replies: [],
  },
  {
    name: "Karan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolore!",
    replies: [
      {
        name: "Karan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolore!",
        replies: [],
      },
      {
        name: "Karan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolore!",
        replies: [
          {
            name: "Karan",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolore!",
            replies: [],
          },
        ],
      },
      {
        name: "Karan",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolore!",
        replies: [],
      },
    ],
  },
  {
    name: "Karan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolore!",
    replies: [],
  },
  {
    name: "Karan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolore!",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex my-2 bg-gray-100 rounded-lg">
      <img
        className="h-12 w-12 rounded-3xl"
        src="https://www.w3schools.com/w3images/avatar2.png"
        alt="user"
      />
      <div className="pl-5">
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ commentData }) => {
  return (
    <>
      {commentData.map((comment, index) => (
        <div key={index}>
        <Comment key={index} data={comment} />
        <div className="pl-10 border border-l-black ml-5">
            <CommentList commentData={comment.replies} />
        </div>
        </div>
      ))}
    </>
  );
};

const CommentsContainer = () => {
  return (
    <div className="px-5 mt-5">
      <h1 className="font-bold text-xl">Comments</h1>
      <CommentList commentData={commentsData} />
    </div>
  );
};

export default CommentsContainer;
