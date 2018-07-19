import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'


export default class NewPostForm extends Component {
    state = {
        post: {
            title: '',
            body: '',
            user_id: 1
        }
    }

    formChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        const post = { ...this.state.post }
        post[name] = value
        this.setState({ post })
    }

    StyledPostForm = styled.div`
        display: flex;
        flex-direction: column;
        input {
            height: 24px;
            font-size: 20px;
            outline: none;
            background-color: #F0EAD6;
            border: none;
            border-bottom: 1px solid black;
        }
        textarea {
            background-color: #F0EAD6;
            border: none;
            border-bottom: 1px solid black;
            font-size: 20px;
            flex-grow: 1;
            outline: none;
        }
        button {
            width: 90px;
            margin: 0 auto;
            height: 30px;
            border-radius: 3px;
        }

        /* @media screen and (min-width: 450px) */
    `

    StyledFormRow = styled.div`
        display: flex;
        margin: 0 0 2em 0;
        label {
            width: 50px;
        }
    `
    postRequest = async() => {
        // const response = await axios.post(`/api/cities/${this.props.city_id}/posts`, this.state.post)
        const response = await axios.post(`/api/cities/20/posts`, this.state.post)
        return response
    }
    submitPost = () => {
        this.postRequest()
        // this.props.history.push(`/cities/${this.props.city_id}`)
        this.props.history.push(`/cities/20`)
    }

    render() {
        return (
            <this.StyledPostForm>
                <this.StyledFormRow>
                    <label htmlFor="name">Name:</label>
                    <input onChange={this.formChangeHandler}
                        type="text"
                        name="name"
                        value={this.state.post.name} />
                </this.StyledFormRow>
                <this.StyledFormRow>
                    <label htmlFor="title">Title:</label>
                    <input onChange={this.formChangeHandler}
                        type="text"
                        name="title"
                        value={this.state.post.title} />
                </this.StyledFormRow>
                <this.StyledFormRow>
                    <label htmlFor="body">Body:</label>
                    <textarea
                        onChange={this.formChangeHandler}
                        name="body"
                        value={this.state.post.body}></textarea>
                </this.StyledFormRow>
                <button onClick={this.submitPost}>Publish</button>
            </this.StyledPostForm>
        )
    }
}
