import React from "react";
import { CommentUser, ReplyButton } from "../CommentCard.styled";
import Avatar from "../../images/avatars/image-amyrobson.png";
import ReplyArrow from "../../images/icon-reply.svg";
const CommentContentUser = () => {
  return (
    <CommentUser>
      <img src={Avatar} alt="Avatar" />
      <p className="userName">amyrobson</p>
      <p className="userNameDate">1 month ago</p>
      <ReplyButton>
        <img src={ReplyArrow} alt="" />
        <h3>Reply</h3>
      </ReplyButton>
    </CommentUser>
  );
};

export default CommentContentUser;
