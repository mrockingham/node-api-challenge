import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
    <div className="App">
   < Home />
    </div>
    </Switch>
    </Router>
  );
}

export default App;
