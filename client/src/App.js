import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './components/navbar';
import HomePage from './components/HomePage';
import NewPostPage from './components/NewPostPage';
import CityShowPage from './components/CityShowPage';
import ProfilePage from './components/ProfilePage';
import PostPage from './components/PostPage';


class App extends Component {

  render() {
    const CityShowPageComponent = (props) => <CityShowPage {...props} />
    const ProfilePageComponent = (props) => <ProfilePage {...props} />
    const PostPageComponent = (props) => <PostPage {...props} />
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/cities/:cityId" render={CityShowPageComponent} />
            <Route exact path="/users/:userId" render={ProfilePageComponent} />
            <Route exact path="/users/:userId/posts/:postId" render={PostPageComponent} />
            <Route exact path="/users/:userId/posts/new" component={NewPostPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
