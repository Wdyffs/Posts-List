import React, { useState } from "react";

const Counter = () => {
  let [likes, setLikes] = useState(0);

  function increment() {
    setLikes(++likes);
  }
  function decrement() {
    setLikes(--likes);
  }
  return (
    <>
      <h1>{likes}</h1>;<button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Counter;
