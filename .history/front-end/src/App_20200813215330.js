import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CourseState } from './context/courseContext/CourseState';
import { TablePage } from './pages/TablePage/TablePage';
import { ValutePage } from './pages/ValutePage/ValutePage';



const App = ()=> (
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
