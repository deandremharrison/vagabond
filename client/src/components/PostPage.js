import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
export default class PostPage extends Component {
  fetchUserData = async () => {
    const res = await axios.get(`/api/users/${this.props.match.params.userId}`);
    const user = res.data;
    return user;
  };
  saveUserData = async () => {
    const user = await this.fetchUserData();
    this.setState({ user });
  };
  Tack = styled.div`
    height: 50px;
    width: 50px;
    margin: 0px;
  `;
  SlightBorder = styled.div`
    border: 1px solid black;
    padding: 5px;
    text-align: center;
    font-size: 65px;
    font-family: serif;
    border-radius:35px;
  `;
  SlightBorderText = styled.div`
    padding: 5px;
    border:1px solid black;
    text-align: center;
    margin: 35px;
    border-radius:45px;
    font-size: 15px;
    font-family:serif;
    h1 {
      font-size: 32px;
    }
  `;
  SlightBorderUser = styled.div`
    margin: 5px;
    margin-bottom: 10px;
    border: 1px solid black;
    border-radius: 45px;
    padding: 12px;
    background-color:#F0EBD4;
    font-size: 19px;
    text-align: center;
    height:120px;
    width:180px;
    h3{
      font-size:25px;
    }
  `;
  StyledTitle2 = styled.div`
    border: 2px solid black;
    height: 450px;
    width: 800px;
    margin-bottom: 25px;
    margin-top: 65px;
    margin-right:20px;
    border-radius:35px;
    padding: 80px;
    font-size: 15px;
   background-color: lemonchiffon;
   img {
      height: 90px;
      width: 90px;
      margin-left: 350px;
    }
  `;
  StyledTitle2Image = styled.div`
 
    height: 100vh;
    width: 500px;
    padding: 50px;
    margin-right: 75px;
    img {
      margin-bottom: 65px;
      height:200px;
      width:200px;
    }
  `;
  BlockDiv = styled.div`
    display: block;
  `;
  ParentFLexBox = styled.div`
    display: flex;
   
  `;
  state = {
    post: {},
    user: {}
  };
  fetchPostData = async () => {
    const res = await axios.get(
      `/api/users/${this.props.match.params.userId}/posts/${
        this.props.match.params.postId
      }`
    );
    this.setState({ post: res.data });
  };
  componentDidMount = () => {
    this.fetchPostData();
    this.saveUserData();
  };
  render() {
    return (
      <div>
        {/* <div>CHINATOWN EATS</div> */}
        <this.ParentFLexBox>
          <this.StyledTitle2Image>
            <img
              src="https://image.flaticon.com/icons/png/512/206/206881.png"
              alt=""
            />
            <this.SlightBorderUser>
            
                <h3>User Name:</h3> {this.state.user.name}
              
            </this.SlightBorderUser>
            <this.SlightBorderUser>
            
                <h3>Profile Begin:</h3> {this.state.user.name}
              
            </this.SlightBorderUser>
          
          </this.StyledTitle2Image>
          <div>
            <this.BlockDiv>
              {/* map here: */}
              {/* ends here: */}
              {/* map here: */}
              <this.StyledTitle2>
                <img
                  src="https://img.clipartxtras.com/05e3b5ec32dc5eeeda06c7efb72a6fee_school-surplies-push-pin-red-no-back-free-images-at-clkercom-pin-clipart-transparent_600-600.png"
                  alt=""
                />
                <div>
                  <this.SlightBorder>
                    <div> {this.state.post.title}</div>
                  </this.SlightBorder>
                  <this.SlightBorderText>
                  <h1>Post Body</h1>
                    <div>{this.state.post.body}</div>
                    <h1>Created At:</h1>
                    <div>{this.state.post.created_at}</div>
                    
                  </this.SlightBorderText>
                </div>
              </this.StyledTitle2>
              {/* ends here: */}
            </this.BlockDiv>
          </div>
        </this.ParentFLexBox>
        {/* =================================================      */}
        {/* <div>
            
            <button className="buttonlike">Edit shit</button>
            <button className="buttonlike">Update Sumn</button>
            <button className="buttonlike">Other stuff</button>
          </div> */}
      </div>
    );
  }
}