import React , { useState } from 'react';
import { pushMessage } from "../firebase";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

const MessageSubmitButton = ({ name, text, setText }) => {

  // const [disabled , setDisabled] = useState(true)


  return (
    <IconButton 
      disabled={text === ""}
      onClick={()=>{
        pushMessage({name:"とし" , text});
        setText("");
      }}
      >
      <SendIcon/>
    </IconButton>
  )
}

export default MessageSubmitButton
