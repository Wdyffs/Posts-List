import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/postService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPost, isPostLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [fetchCom, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getComByPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPost(params.id);
    fetchCom(params.id);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Post page ID = {params.id}</h1>
      {isPostLoading ? (
        <Loader />
      ) : (
        <div style={{ marginTop: "30px" }}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
      <h3 style={{ marginTop: "20px" }}>Comments</h3>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((com) => {
            return (
              <div style={{ marginTop: "20px" }}>
                <h4>{com.name}</h4>
                <span style={{ fontStyle: "italic" }}>{com.email}</span>
                <p>{com.body}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
