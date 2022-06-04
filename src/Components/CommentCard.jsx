import React from "react";
import { CommentContainer } from "./CommentCard.styled";
import VoteCounter from "./CommentCardDetails/VoteCounter";
import CommentContent from "./CommentCardDetails/CommentContent";

const CommentCard = (props) => {
  return (
    <CommentContainer>
      <VoteCounter voteCount = {props.voteCount}/>
      <CommentContent
        content={props.content}
        avatar={props.avatar}
        username={props.username}
      />
    </CommentContainer>
  );
};

export default CommentCard;
