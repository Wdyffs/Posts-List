import React, { useState, useRef } from "react";

const Input = () => {
  let [value, setValue] = useState("Text from input");
  let input = useRef(null);
  return (
    <>
      <h1>{value}</h1>
      <input
        type="text"
        placeholder="Text from input"
        ref={input}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button
        onClick={(e) => {
          input.current.value = "";
          setValue("");
        }}
      >
        Clear
      </button>
    </>
  );
};

export default Input;
