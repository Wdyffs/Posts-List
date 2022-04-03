import React, { useState } from "react";
import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";

const MyForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    const newPost = {
      ...post,
      id: Date.now(),
    };
    e.preventDefault();
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Post title"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Post description"
      />
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
};

export default MyForm;
