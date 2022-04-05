import React, { useMemo, useState } from "react";
import "./styles/App.css";
import PostsList from "./components/PostsList";
import MyForm from "./components/UI/MyForm/MyForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "React", body: "Frontend" },
    { id: 2, title: "JavaScript", body: "Language" },
    { id: 3, title: "NodeJs", body: "Backend" },
    { id: 4, title: "MongoDB", body: "Database" },
  ]);

  const [filter, setFilter] = useState({ sort: "", searchQuery: "" });
  const [modal, setModal] = useState(false);

  const sortedPost = useMemo(() => {
    console.log("READY TO SORT");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPost = useMemo(() => {
    return sortedPost.filter((post) =>
      post.title.toLowerCase().includes(filter.searchQuery.toLowerCase())
    );
  }, [sortedPost, filter.searchQuery]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  // const inputRef = useRef(); --- Can create a non control component
  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <MyForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostsList remove={removePost} posts={sortedAndSearchedPost} />
    </div>
  );
}

export default App;
