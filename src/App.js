import React, { Component } from 'react';
import Image from './components/Image';
import './App.css';

const URL = 'http://52.8.212.143:6431/';
//const URL = 'http://localhost:5000/'; //Ver carpeta 'scripts'

class App extends Component {
  constructor() {
    super();
    this.state = { image: null, error: null };
  }

  componentDidMount() {
    fetch(URL)
      .then(response => { 
        if (!response.ok) { 
          throw Error(response.statusText); 
        } 
        return response.json(); 
      })
      .then(response => this.setState({image: response}))
      .catch(error => this.setState({error: error.message}));
  }

  render() {
    if (this.state.error) {
      return  <div className="Error">
                <h1>Something went wrong!</h1>
                <h2>Our Engineers are on it</h2>
              </div> 
    }

    if (!this.state.image) {
      return  <div className="Loading">
                <h2>Loading...</h2>
              </div>
    }

    return <Image data={this.state.image.data} size={this.state.image.size} />
  }
}

export default App;
