import React, { Component } from 'react';
import './Post.css'

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post : props.post
    }
  }

  render() {
    const post = this.props.post
    return (
      <div className="Post-box">
        <div className="Post-info">
          <h2 className="Post-title">{post.title}</h2>
          <img className="Post-thumbnail" src={post.imgsrc} alt="thumbnail"/>
        </div>
        <div className="Post-detail">
          <span>{post.source}</span>
          <span>{post.commentCount}评论</span>
          <span>{post.ptime}</span>
        </div>
      </div>
    )
  }
}

export default Post;