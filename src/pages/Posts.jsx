import React, { useEffect, useState } from "react";
import PostsList from "../components/PostsList";
import MyForm from "../components/UI/MyForm/MyForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/postService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPagesCount } from "../utils/pages";
import Pagination from "../components/UI/Pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([]);

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [filter, setFilter] = useState({ sort: "", searchQuery: "" });
  const [modal, setModal] = useState(false);

  const lastElement = React.useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, currentPage);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  useObserver(lastElement, currentPage < totalPages, isPostsLoading, () => {
    setCurrentPage(currentPage + 1);
  });

  useEffect(() => {
    fetchPosts(limit, currentPage);
  }, [currentPage, limit]);

  const sortedAndSearchedPost = usePosts(
    posts,
    filter.sort,
    filter.searchQuery
  );

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  function changeCurrentPage(page) {
    // setCurrentPage(page);
  }

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
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Count of elements"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "Show all posts" },
        ]}
      />
      {postError && (
        <h1
          style={{ fontStyle: "bold", textAlign: "center", marginTop: "30px" }}
        >
          Find an error <span style={{ color: "red" }}>${postError}</span>
        </h1>
      )}
      {isPostsLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      )}
      <PostsList
        error={postError}
        remove={removePost}
        posts={sortedAndSearchedPost}
      />
      <div
        ref={lastElement}
        style={{ height: "20px", background: "teal" }}
      ></div>
      {/* <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
      /> */}
    </div>
  );
}

export default Posts;
