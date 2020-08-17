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

export default ({ color, href, disabled }) => {
  const classes = useStyles();

  return (

    <Button variant="contained">Default</Button>
    <Button variant="contained" color="primary">
      Primary
      </Button>
    <Button variant="contained" color="secondary">
      Secondary
      </Button>
    <Button variant="contained" disabled>
      Disabled
      </Button>
    <Button variant="contained" color="primary" href="#contained-buttons">
      Link
      </Button>

  );
}
