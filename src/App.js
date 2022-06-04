import "./App.css";
import CommentCard from "./Components/CommentCard";
import AddComment from "./Components/AddCommentDetails/AddCommentContainer";
import { useState } from "react";

function App() {
 const data = [
    {
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      avatar: "./images/avatars/image-amyrobson.png",
      username: "amyborson",
      id: Math.random().toString(),
      voteCount:20
    },
  ];
  
  const [dataList, setDataList] = useState(data);

  return (

    <>
      {dataList.map((item) => (
        <CommentCard
          username={item.username}
          content={item.content}
          avatar={item.avatar}
          key={item.id}
          voteCount = {item.voteCount}
        />
      ))}
      
      <AddComment setData={setDataList} data = {dataList}/>
    </>
  );
}

export default App;
