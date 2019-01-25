import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Tab from './components/Tab/Tab'
import Post from './components/Post/Post'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {postList: null}
  }

  componentWillMount() {
    this.jsonp('https://3g.163.com/touch/reconstruct/article/list/BA10TA81wangning/0-10.html',  (data) => {
      // data = JSON.stringify(data)
      
      const list = data.BA10TA81wangning;
      this.setState({
        postList: list
      })
    });
  }

  jsonp(url, callback) {
    var callbackName = 'artiList';
    window[callbackName] = function(data) {
      delete window[callbackName];
      document.body.removeChild(script);
      callback(data);
    };

    var script = document.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
  }

  
  render() {
    if ( this.state.postList === null ) {
      console.log('loading') 
      return false;
    } else {
      return (
        <div className="App">
          <Header></Header>
          <div className="Post">
          { this.state.postList.map((item, key) => <Post post={item} key={key}></Post>) }
          </div>
          <Tab></Tab>
        </div>
      );
    }
  }
}

export default App;
