import React from 'react';
import { pushMessage } from "../firebase";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

const MessageSubmitButton = ({ name, text, setText , inputEl}) => {

  return (
    <IconButton 
      disabled={text === ""}
      onClick={()=>{
        pushMessage({name , text});
        setText("");
        inputEl.current.focus();
      }}
      >
      <SendIcon/>
    </IconButton>
  )
}

export default MessageSubmitButton
