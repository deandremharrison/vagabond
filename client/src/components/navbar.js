import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class Navbar extends Component {
  state = {
    loggedIn: false
  }

  StyledNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2vw 0 2vw;

    a {
      text-decoration: none;
      padding: 0 1vw;
      font-size: calc(14px + 1vw);
      color: black;
    }

    h1{
      font-size: calc(12px + 3vw);
      margin: 1vh 0;
    }
  `
  render() {
    return (
      <this.StyledNavbar>

        <h1>Vagabond</h1>

        <div>
          <Link to="">{this.state.loggedIn
            ? "Profile"
            : "Log in"}</Link>
          <Link to="">{this.state.loggedIn
            ? "Log Out"
            : "Sign up"}</Link>
        </div>

      </this.StyledNavbar>
    )
  }
}
