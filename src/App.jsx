import React, { Component } from 'react';
import logo from './logo.svg';

import Main from "./Main"

import './App.css';
import OpeningCrawl from './OpeningCrawl';

class App extends Component {

state = {
  componentToLoaded : OpeningCrawl,
  action:{ launchMain : () => this.launchMain()}

}

launchMain = () => {
  this.setState({
    componentToLoaded : Main,
  })
}


  render (){
    return (
    <div className="App">
      { (this.state.componentToLoaded !== 0 &&         
            <this.state.componentToLoaded action={this.state.action}/>
      )}

     
    </div>
    );
  }
}

export default App;
