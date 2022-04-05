import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

const PostsList = ({ posts, remove }) => {
  if (posts.length === 0) {
    return <h1 style={{ textAlign: "center" }}>Posts list is empty</h1>;
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Posts List</h1>
      <TransitionGroup>
        {posts.map((post, index) => {
          return (
            <CSSTransition key={post.id} timeout={500} classNames="item">
              <PostItem remove={remove} number={index + 1} post={post} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </>
  );
};

export default PostsList;
