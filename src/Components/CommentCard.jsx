import React from "react";
import { CommentContainer} from "./CommentCard.styled";
import VoteCounter from "./CommentCardDetails/VoteCounter";
import CommentContent from "./CommentCardDetails/CommentContent";

const CommentCard = () =>{
    return(
    <CommentContainer>
        <VoteCounter />
        <CommentContent />
    </CommentContainer>
    )
}

export default CommentCard; 