import React from 'react';
import TextField from '@material-ui/core/TextField';
import { debounce } from '@material-ui/core';

const TextInput = (props) => {
  return(
    <TextField
      fullWidth={true}
      label={props.label}
      margin={"dense"}
      multiline={props.multiline}
      rows={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
    />
  )
}

export default TextInput;