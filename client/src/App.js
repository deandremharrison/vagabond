import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './components/navbar';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
