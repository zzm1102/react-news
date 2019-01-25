import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  constructor(props) {
    super(props);
    const docid = window.location.hash.slice(10);
    const post = props.postList.filter((item) => item.docid === docid)
    this.state = {
      docid,
      post
    }
  }  

  
  
  render() {
    const post = this.state.post[0];

    return (
      <div className="Article">
        <h1 className="Article-title">{post.title}</h1>
        <p className="detail"><span>{post.source}</span> <span>{post.ptime}</span></p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam molestias accusamus! 
          Fugit eum eveniet asperiores, alias possimus assumenda? Ad a tenetur eveniet veritatis perferendis 
          repudiandae similique placeat eum consequatur?
        </p>
        <img src={post.imgsrc} className="Main-pic" alt="pic"/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam molestias accusamus! 
          Fugit eum eveniet asperiores, alias possimus assumenda? Ad a tenetur eveniet veritatis perferendis 
          repudiandae similique placeat eum consequatur?
        </p>
      </div>
    )
  }
}

export default Article;
