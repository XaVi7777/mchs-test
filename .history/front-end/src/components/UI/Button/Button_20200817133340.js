import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default ({
  color, href, disabled, text,
  onClick, type, children
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        type={type}
        variant="contained"
        color={color}
        href={href}
        disabled={disabled}
        onClick={onClick}
children
      >
        {text}
      </Button>
    </div>
  );
}
