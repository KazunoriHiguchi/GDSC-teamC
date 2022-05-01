import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={name:"わんこ"};
  }
  render(){
    return(
    <div>
<button>
授業名<br/>教師名
</button>

    </div>
    )
  }
}

export default App;
