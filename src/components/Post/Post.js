import React, { Component } from 'react';
import './Post.css'

class Post extends Component {
  constructor(props) {
    super(props)

    console.log(props)
    this.state = {
      post : props.post
    }
  }

  render() {
    const post = this.props.post
    return (
      <div className="Post-box">
        <h2>{post.title}</h2>
        <img className="Post-thumbnail" src={post.imgsrc} alt="thumbnail"/>
        <div>
          <span>置顶</span>
          <span>{post.source}</span>
          <span>{post.commentCount}评论</span>
          <span>shijian</span>
        </div>
      </div>
    )
  }
}

export default Post;