import React from "react";
import { CommentContentContainer } from "../CommentCard.styled";
import CommentContentUser from "./CommentContentUser";
import CommentContentText from "./CommentContentText";

const CommentContent = (props) => {
  return (
    <CommentContentContainer>
      <CommentContentUser username = {props.username} avatar = {props.avatar} />
      <CommentContentText content = {props.content} />
    </CommentContentContainer>
  );
};

export default CommentContent;
