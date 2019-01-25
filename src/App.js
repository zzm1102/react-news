import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main'
import Article from './components/Article/Article'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {postList: null}
  }

  componentWillMount() {
    this.jsonp('https://3g.163.com/touch/reconstruct/article/list/BA10TA81wangning/0-10.html',  (data) => {
      const list = data.BA10TA81wangning;
      console.log(list)
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
        <HashRouter>
          <Switch>
            <Route exact path='/'>
              <Main postList={this.state.postList}></Main>
            </Route>
            
            <Route path='/article/:id'>
              <Article postList={this.state.postList}></Article>
            </Route>
          </Switch>
        </HashRouter>
      );
    }
  }
}

export default App;
