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

  useEffect(()=>{},[]);
  messagesRef
    .orderByKey()
    .limitToLast(3)
    .on("value",(snapshot) => {
    const messages = snapshot.val();
    const entries = Object.entries(messages);
    const newMessages = entries.map((entry) => {
      console.log(entry);
      const [key , nameAndText] = entry;
      // const key = entry[0];
      // const nameAndText = entry[1]
      return {key , nameAndText};
    })
    console.log(newMessages);
    setMessages(newMessages);
  })
  return (
    <div className={classes.root}>
      MessageList
    </div>
  )
}

export default MessageList
