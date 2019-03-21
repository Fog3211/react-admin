import React, { Component } from 'react';
import "@/style/App.scss";

// 引入所有的子路由
class App extends Component {
  render() {
    return (
      <div >
        {this.props.children}das
      </div>
    );
  }
}

export default App;
