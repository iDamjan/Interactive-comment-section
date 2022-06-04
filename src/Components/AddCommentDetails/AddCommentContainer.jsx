import React, { useState } from "react";
import { AddCommentSection } from "./AddComment.styled";
import { Button } from "../../UI/Button.styled";
import Juliusomo from "../../images/avatars/image-juliusomo.png";

export const AddComment = ({ setData, data }) => {
  const [newComment, setNewComment] = useState("");
  
  const commentHandler = (e) => {
    setNewComment(e.target.value);
  };
  const submitHandler = () => {
    setData([
      ...data,
      { username: "juliusomo", content: newComment, avatar: "./images/avatars/image-juliusomo.png", id:Math.random(),voteCount:0},
    ]);
    setNewComment("");
  };

  return (
    <AddCommentSection>
      <img src={Juliusomo} alt="JuliosomoAvatar" />
      <textarea
        value={newComment}
        onChange={commentHandler}
        placeholder="Add Comment..."
        name=""
        id=""
        cols="auto"
        rows="auto"
      ></textarea>
      <Button onClick={submitHandler}>SEND</Button>
    </AddCommentSection>
  );
};

export default AddComment;
