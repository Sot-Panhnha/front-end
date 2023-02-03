import React, { Component } from 'react'
import axois from 'axios'

export default class BlogContent extends Component {
      state = {
            blogs: []
      }
      getBlog(){
            axois.get('http://localhost:1337/api/blog-contents')
            .then(res => {
                  const blogs = res.data;
                  this.setState({blogs})
            })
      }
  render() {
      console.log(blogs)

    return (
      <div>{blogs}</div>
    )
  }
}
