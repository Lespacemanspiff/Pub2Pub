import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import PubList from './pages/PubList'
import Pub from './pages/Pub';
import AboutUs from  './pages/AboutUs'

class App extends Component {
  render() {
    return (
      <div className="mainapp">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/PubList" component={PubList}/>
          <Route path="/pub/:id" component={Pub}/>
          <Route path="/AboutUs" component={AboutUs}/>
        </Switch>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;