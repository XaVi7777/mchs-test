import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(5),
    width: 200,
  },
}));

export default function DatePickers({ onChange, onKeyPress, label }) {
  const classes = useStyles();
  const [dataInputValues, setInputValues] =


  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label={label}
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </form>
  );
}
