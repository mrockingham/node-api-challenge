import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import ActionList from './components/ActionList'
import Header from './components/Header'

import './App.css';

function App() {
  return (
    <div>
      
    <Router>
       <Header />
      <Switch>
       
    <div className="App">
   < Route exact path= '/' component= {Home} />
   <Route path = '/action/:id' component={ActionList}/>
    </div>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
