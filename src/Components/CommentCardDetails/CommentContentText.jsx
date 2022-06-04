import React from "react";
import { CommentText } from "../CommentCard.styled";

const CommentContentText = ({content}) => {
  return (
    <CommentText>
      <p>
        {content}
      </p>
    </CommentText>
  );
};

export default CommentContentText;
