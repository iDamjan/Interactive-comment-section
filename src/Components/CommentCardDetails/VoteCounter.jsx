import React from "react";
import { VoteContainer } from "../CommentCard.styled";
import plusSign from "../../images/icon-plus.svg";
import minusSign from "../../images/icon-minus.svg";

const VoteCounter = () => {
  return (
    <VoteContainer>
      <img src={plusSign} alt="dwadaaw" />
      <h6>20</h6>
      <img src={minusSign} alt="dada" />
    </VoteContainer>
  )
};

export default VoteCounter;
