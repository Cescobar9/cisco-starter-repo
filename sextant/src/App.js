import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Banner title="Chris's Sextant"/>
        <div className='col'>
          <Exhibit title = "Hai ^.^/" description="I love Cookies" />
          <Exhibit title = "Hai :<" description="I hate Cookies" />
          <Exhibit title = "Hai!" description="I love Cookies" />
        </div>
      </div>
    );
  }
}

class Banner extends React.Component{
  render(){
    return (
      <div className='Banner'>
        <div>
          <h1 className='Banner-text'> {this.props.title} </h1>
        </div>
      </div>
    ) ;
  }
}

class Exhibit extends React.Component{
  render(){
    return(
      <div className='Card'>
        <h2 className='Card-Data-Header'>{this.props.title}</h2>
        <p className='Card-Text'>{this.props.description}</p>
      </div>
    );
  }
}


export default App;
