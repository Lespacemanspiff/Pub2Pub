import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import PubList from './pages/PubList'

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/PubList" component={PubList}/>
          </Switch>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
