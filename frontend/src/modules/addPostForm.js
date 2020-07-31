import axios from "axios";
import React, { useState } from "react";

import Input from "components/input";
import Button from "components/button";
import { Body } from "components/text";

const AddPostForm = ({ fetchData }) => {
  const [inputValue, setInputValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/posts", {
        title: inputValue,
      })
      .then(function (res) {
        setInputValue("");
        fetchData();
      });
  };

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input value={inputValue} onChange={changeHandler} />
      <Button type="submit">
        <Body>Submit</Body>
      </Button>
    </form>
  );
};

export default AddPostForm;
