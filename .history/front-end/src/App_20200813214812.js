import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CourseState } from './context/courseContext/CourseState';
import { makeStyles } from '@material-ui/core/styles';
import { TablePage } from './pages/TablePage/TablePage';
import {ValutePage} from './pages/ValutePage/ValutePage'

const useStyles = makeStyles({

  container: {
    width: '100vw',
    height: '100vh',
  }
});

function App() {
  const classes = useStyles();
  return (
    <CourseState>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={TablePage}
          />
          <Route
            path="/valute"
            exact
            component={ValutePage}
          />
        </Switch>
      </Router>
    </CourseState>
  );
}

export default App;
