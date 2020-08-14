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
        <h1>Приложение с курсом вы</h1>
        <Typography
          component="div"
          style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
        />
      </Container>
    </div>
  );
}

export default App;
