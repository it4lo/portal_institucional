import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import TextField from '@material-ui/core/TextField';


export default function InputDate({ name, label, ...rest }) {

  const inputRef = useRef(null);
  const { fieldName, registerField, error, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'children[1].children[0].value'
    })

  }, [fieldName, registerField])

  return (
    <TextField
      error={error ? true : false}
      ref={inputRef}
      id="date"
      label={label}
      margin="dense"
      defaultValue={defaultValue}
      type="date"
      format="dd/MM/yyyy"
      fullWidth
      helperText={error ? error : ""}
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
    />

  );
}