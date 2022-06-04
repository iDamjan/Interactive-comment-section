import styled from "styled-components";

export const AddCommentSection = styled.div`

  box-shadow: 2px 2px 20px gray;
  width: 100%;
  max-width: 750px;
  height: 150px;
  border-radius: 15px;
  padding: 30px;
  margin:2rem 0;
  display:flex;
  justify-content:space-around;
  background-color:white;
  overflow:hidden;
  textarea{
      resize:none;
      width:65%;
      border-radius:10px;
      border:1px solid gray;
      font-size:15px;
      padding:20px;
      &:focus{
          outline:none;
          border:1px solid hsl(238, 40%, 70%);
      }
  }
  img{
      width:50px;
      height:50px;
  }
  
`;
