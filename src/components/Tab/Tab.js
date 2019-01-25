import React, { Component } from 'react';
import './Tab.css'

class Tab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [
        {tabName: "首页", id: 1},
        {tabName: "西瓜视频", id: 2},
        {tabName: "发头条", id: 3},
        {tabName: "小视频", id: 4},
        {tabName: "我的", id: 15}
      ],
      currentIndex: 1,
    }
  }

  changeTab = (id) => {
    this.setState({
      currentIndex: id
    })
  }

  render() {
    const tabList = this.state.tabs.map((item, index) => {
      const tabStyle = item.id === this.state.currentIndex ? 'Tab-item active' : 'Tab-item';

      return <li key={index} onClick={this.changeTab.bind(this, item.id)} className={tabStyle}
      >{item.tabName}</li>
    });

    return (
      <ul className="Tab-box">
        {tabList}
      </ul>
    )
  }
}

export default Tab;