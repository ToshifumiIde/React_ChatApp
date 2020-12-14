import React, {useState , useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { messagesRef } from "../firebase";

const useStyles = makeStyles({
  root:{
    gridRow:1,
  },
});


const MessageList = () => {
  const classes = useStyles();
  const [messages , setMessages] = useState([]);

  useEffect(()=>{
    messagesRef
    .orderByKey()
    .limitToLast(3)
    .on("value",(snapshot) => {
    const messages = snapshot.val();//中身を取り出すにはval()メソッドを使用
    if (messages === null) return;//中身がからであった場合、後の処理を実行しない
    const entries = Object.entries(messages);
    const newMessages = entries.map((entry) => {
      console.log(entry);
      // const key = entry[0];
      // const nameAndText = entry[1]
      const [key ,nameAndText] = entry;//上の2行をまとめた書き方、配列に格納
      return {key , ...nameAndText};
    });
    console.log(newMessages);
    setMessages(newMessages);
  });
  },[]);
  
  return (
    <div className={classes.root}>
      MessageList
    </div>
  )
}

export default MessageList
