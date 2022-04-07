import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/postService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPost, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPost(params.id);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Post page ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
