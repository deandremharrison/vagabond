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
    border: 1px solid red;
    align-items: center;
    padding: 0 2vw 0 2vw;

    a {
      text-decoration: none;
      padding: 0 1vw;
      font-size: calc(14px + 1vw);
    }

    h1 {
      font-family: Georgia, 'Times New Roman', Times, serif;
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
