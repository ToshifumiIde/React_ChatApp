import React, { useRef , useEffect } from 'react';
import { 
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { gravatarPath } from "../gravatar";

const useStyles = makeStyles(() => ({
    inline: {
      display: 'inline',
    },
  }));

const messageItem = ({ name , text ,isLastItem}) => {
  const classes = useStyles();
  const avatarPath = gravatarPath(name);
  const ref = useRef(null);

  useEffect(()=>{
    if(isLastItem){
      //messageの最後にスクロールする処理を実装
      ref.current.scrollInToView({ behavior:"smooth"});
    }
  },[isLastItem]);//isLastItemのstatusに変更があった場合（false=>true）

  return (
    <ListItem divider={true} ref={ref}>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {text}
            </Typography>
        }
      />
    </ListItem>
    
  )
};

export default messageItem;
