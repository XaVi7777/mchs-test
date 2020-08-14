import React from 'react';
import { CssBaseline, Typography, Container } from '@material-ui/core';
import { CourseState } from './context/courseContext/CourseState';

import Header from './components/Header/Header';
import Table from './containers/Table/Table';

export const TablePage = () => (
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
        <Header />

        <Table />
      </Typography>
    </Container>
  </div>
)
