import React from 'react';
import { CssBaseline, Typography, Container } from '@material-ui/core';
import {} from './context/courseContext/'
import Table from './containers/Table/Table';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters={true}
      >

        <Typography
          component="div"
          style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
        >
          <h1>Приложение с курсом валюты</h1>
          <Table />
        </Typography>
      </Container>
    </div>
  );
}

export default App;
