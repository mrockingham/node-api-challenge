import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import ActionList from './components/ActionList'

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
    <div className="App">
   < Route exact path= '/' component= {Home} />
   <Route path = '/action/:id' component={ActionList}/>
    </div>
    </Switch>
    </Router>
  );
}

export default App;
