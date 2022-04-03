import React, { useRef, useState } from "react";
import "./styles/App.css";
import PostsList from "./components/PostsList";
import MyForm from "./components/UI/MyForm/MyForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "React", body: "Frontend" },
    { id: 2, title: "JavaScript", body: "Language" },
    { id: 3, title: "NodeJs", body: "Backend" },
    { id: 4, title: "MongoDB", body: "Database" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const getSortedPost = () => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  };

  const renderedPosts = getSortedPost();

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  // const inputRef = useRef(); --- Can create a non control component

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };
  return (
    <div className="App">
      <MyForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MyInput
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <MySelect
          defaultValue="Sort by:"
          value={selectedSort}
          onChange={sortPosts}
          options={[
            { value: "title", name: "Name" },
            { value: "body", name: "Description" },
          ]}
        />
      </div>
      {posts.length !== 0 ? (
        <PostsList remove={removePost} posts={renderedPosts} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Posts list is empty</h1>
      )}
    </div>
  );
}

export default App;
