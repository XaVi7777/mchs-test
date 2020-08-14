import React from 'react';
import { CssBaseline, Typography, Container } from '@material-ui/core';
import { CourseState } from './context/courseContext/CourseState';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header/Header';
import Table from './containers/Table/Table';

const useStyles = makeStyles({

  container: {
    width: '100vw',
    height: '100vh',
    margin
  }
});

function App() {
  const classes = useStyles();
  return (
    <CourseState>
      <div >
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
            <Header />

            <Table />
          </Typography>
        </Container>
      </div>
    </CourseState>
  );
}

export default App;
