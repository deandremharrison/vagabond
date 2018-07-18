import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './components/navbar';
import HomePage from './components/HomePage';
import NewPostPage from './components/NewPostPage';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/users/:user_id/posts/new" component={NewPostPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
