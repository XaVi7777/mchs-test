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
  onClick, type,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
      type={}
        variant="contained"
        color={color}
        href={href}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </Button>
    </div>
  );
}
