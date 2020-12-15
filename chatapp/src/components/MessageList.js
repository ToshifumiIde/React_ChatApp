import React, { useState , useEffect } from 'react';
import { List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MessageItem from "./MessageItem";
import { messagesRef } from "../firebase";

const useStyles = makeStyles({
  root:{
    gridRow:1,
    overflow:"auto",
    width:'100%',
  },
});

const MessageList = () => {
  const classes = useStyles();
  const [messages , setMessages] = useState([]);

  useEffect(()=>{
    messagesRef
    .orderByKey()
    .limitToLast(15)
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
    setMessages(newMessages);
  });
  },[]);
  
  const length = messages.length;

  return (
    <List className={classes.root}>
    {
      messages.map(({key ,name ,text} , index) =>{

        const isLastItem = length === index + 1;
        return (
          <MessageItem 
            key={key} 
            name={name} 
            text={text}
            isLastItem={isLastItem}
          />
        )
      })//map関数でオブジェクトに含まれる複数のキーを渡したい場合、引数を{}で囲い、,,で区切る
    }
    </List>
  )
}

export default MessageList
