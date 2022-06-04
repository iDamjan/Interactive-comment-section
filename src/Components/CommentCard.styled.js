import styled from "styled-components";

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 750px;
  color: black;
  background-color: white;
  height: 170px;
  border-radius: 15px;
  box-shadow: 1px 2px 20px gray;
  padding: 30px;
  margin:2rem 0;
`;

export const VoteContainer = styled.div`
  background-color: hsl(228, 33%, 97%);
  height: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  width: 40px;
  padding: 10px;
  box-sizing: border-box;
  img {
    width: 100%;
    &:hover {
      opacity: 80%;
      cursor: pointer;
    }
  }
  h6 {
    width: 100%;
    color: hsl(238, 40%, 52%);
    text-align: center;
    font-size: 1.2em;
    margin: 0;
  }
`;

export const CommentContentContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 4fr);
  grip-template-columns: 12fr;
  grip-gap: 4px;
  width: 100%;
  padding-left: 20px;
`;

export const CommentUser = styled.div`
  grid-column: 1/-1;
  grid-row: 1/2;
  display: flex;
  align-items: center;
  width: 100%;
  img {
    width: 35px;
  }
  .userName {
    margin-left: 10px;
    font-weight: bold;
  }
  .userNameDate {
    margin-left: 10px;
    font-weight: 300;
  }
`;
export const CommentText = styled.div`
  grid-column: 1/-1;
  grid-row: 2/-1;
  p{
    color:hsla(211, 10%, 45%, 0.9);
    margin-left:10px;
    margin-right:70px;
    font-weight:300;
  }
`;
export const ReplyButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: auto;
  color: hsl(238, 40%, 52%);
  border-radius:8px;
  padding: 0px 10px;
  border:none;
  height:45px;
  background-color:white;
  svg {
    margin-right: 6px;
    width: 15px;
    fill:hsl(238, 40%, 52%);
  }
  &:hover{
    color:white;
    background-color:hsl(238, 40%, 52%);
    cursor:pointer;
    svg{
      fill:white;
    }
  }
  
`;
