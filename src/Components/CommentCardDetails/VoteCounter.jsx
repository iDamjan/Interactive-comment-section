import { VoteContainer } from "../CommentCard.styled";
import plusSign from "../../images/icon-plus.svg";
import minusSign from "../../images/icon-minus.svg";
import React, { useState } from "react";

const VoteCounter = (props) => {

  const [count, setCount] = useState(props.voteCount);

  const plus = () => {
    setCount(count + 1)
  };

  function minus() {
    setCount(count -1)
  }

  return (
    <VoteContainer>
      <img onClick={plus} src={plusSign} alt="dwadaaw" />
      <h6>{count}</h6>
      <img onClick={minus} src={minusSign} alt="dada" />
    </VoteContainer>
  );
};

export default VoteCounter;
