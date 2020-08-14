import React from 'react';
import { CssBaseline, Typography, Container } from '@material-ui/core';

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
        </Typography>
      </Container>
    </div>
  );
}

export default App;
