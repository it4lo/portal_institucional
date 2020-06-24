import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import TextField from '@material-ui/core/TextField';




export default function Input({ name, label, ...rest }) {

  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'children[1].children[0].value'
    })

  }, [fieldName, registerField])

  return (
    <TextField error={error ? true : false} helperText={error ? error : ""} margin="dense"
      ref={inputRef} fullWidth label={label} defaultValue={defaultValue} variant="outlined" {...rest}/>
  );
}