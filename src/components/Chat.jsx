import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Avatar1 from '../assets/img/avatar1.png';
import Avatar2 from '../assets/img/avatar2.png';

const Chat = (props) => {
  const isQuestion = (props.type === 'question');
  const classes = isQuestion ? 'p-chat_row' : 'p-chat__reverse';

  return(
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={Avatar1} />
        ) : (
          <Avatar alt="icon" src={Avatar2} />
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">{props.text}</div>
  </ListItem>
  )
}


export default Chat;