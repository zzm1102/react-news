import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import Header from '../Header'
import Tab from '../Tab/Tab'
import Post from '../Post/Post'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {postList: props.postList}
  }
  
  render() {
    
    return (
      <div>
        <Header></Header>
        <div className="Post">
          {this.state.postList.map((item, key) => {
            return (
              <Link to={`/article/${item.docid}`} key={key} style={{ textDecoration: 'none' }}>
                <Post post={item}></Post>
              </Link>
            )
          }
          )}
        </div>
        <Tab></Tab>
      </div>
    );
  }
}

export default Main;
