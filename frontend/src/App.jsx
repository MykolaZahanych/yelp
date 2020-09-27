import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import DetailPage from './routes/DetailPage';
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/restaurants/:id/update' component={UpdatePage} />
          <Route exact path='/restaurants/:id' component={DetailPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
