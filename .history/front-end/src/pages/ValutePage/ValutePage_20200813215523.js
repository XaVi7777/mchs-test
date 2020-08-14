import React from 'react';
import { CssBaseline, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

  container: {
    width: '100vw',
    height: '100vh',
  }
});

export const ValutePage = () => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Container
        className={classes.container}
        maxWidth={false}
        disableGutters={true}
      >
        <Typography
          component="div"
          style={{ backgroundColor: '#cfe8fc', height: '100%' }}
        >
<h1
        </Typography>
      </Container>
    </div>
  )
}
