import React from "react";
import PostItem from "./PostItem";

const PostsList = ({ posts, remove }) => {
  if (posts.length === 0) {
    return <h1 style={{ textAlign: "center" }}>Posts list is empty</h1>;
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Posts List</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          key={post.id}
          post={post}
        />
      ))}
    </>
  );
};

export default PostsList;
