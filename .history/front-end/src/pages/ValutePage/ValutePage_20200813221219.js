import React from 'react';
import { CssBaseline, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Valute from '../../containers/Valute/'

const useStyles = makeStyles({

  container: {
    width: '100vw',
    height: '100vh',
  }
});

export const ValutePage = ({ match }) => {
  const classes = useStyles();
  console.log(match.params.id)
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
          <Valute />
        </Typography>
      </Container>
    </div>
  )
}
