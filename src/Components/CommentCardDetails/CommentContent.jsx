import React from "react";
import { CommentContentContainer } from "../CommentCard.styled";
import CommentContentUser from "./CommentContentUser";
import CommentContentText from "./CommentContentText";

const CommentContent = () => {
  return (
    <CommentContentContainer>
      <CommentContentUser />
      <CommentContentText />
    </CommentContentContainer>
  );
};

export default CommentContent;
