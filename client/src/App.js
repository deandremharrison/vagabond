import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './components/navbar';
import HomePage from './components/HomePage';
import NewPostPage from './components/NewPostPage';
import CityShowPage from './components/CityShowPage';


class App extends Component {

  render() {

    const CityShowPageComponent = (props) => <CityShowPage {...props} />
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/cities/:cityId" render={CityShowPageComponent} />
            <Route path="/users/:userId/posts/new" component={NewPostPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
