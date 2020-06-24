import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


export default function InputSelect({ name, label, options, setOption }) {

  /* const managements = ["Sup Geral", "Sup Adm-Financeira", "Sup Adm-Financeira"]; */

  const inputRef = useRef(null);
  const { fieldName, registerField, error, defaultValue } = useField(name);

  const defaultProps = {
    options,
    getOptionLabel: (option) => option,
    getOptionSelected: (option, selectedValue) => {
      return option.value === selectedValue.value;
    }
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'children[0].children[1].children[0].value'
    })
    //console.log(inputRef.current.children[0].children[1].children[0]);
  }, [fieldName, registerField])

  return (
    <Autocomplete
      id={name}
      ref={inputRef}
      {...defaultProps}
      autoComplete
      defaultValue={defaultValue}
      onChange={(e, value) => {
        console.log(e.target.textContent);
      }}
      includeInputInList
      renderInput={(params) => <TextField {...params} label={label} margin="dense" 
      variant="outlined" error={error ? true : false} helperText={error ? error : ""} />}
    />);
}