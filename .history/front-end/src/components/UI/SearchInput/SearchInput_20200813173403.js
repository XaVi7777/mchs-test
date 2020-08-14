import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function SearchInput({
  id, label, placeholder, fullWidth, margin, variant, onChange
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <TextField
          id={id}
          label={label}
          style={{ margin: 8 }}
          placeholder={placeholder}
          fullWidth={fullWidth}
          margin={margin}
          InputLabelProps={{
            shrink: true,
          }}
          variant={variant}
          onChange
        />
      </div>
    </div>
  );
}
