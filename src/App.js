import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Kingdom from './pages/Kingdom'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Kingdom}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
