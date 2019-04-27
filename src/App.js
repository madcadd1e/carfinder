import React, { Component } from 'react';
import Cars from './components/Cars';
import axios from 'axios';
import uuid from 'uuid';


import './styles/common.css';

class App extends Component {
  state = {
    cars: [
     
    ]
  }

  componentDidMount(){
    axios.get('https://gist.githubusercontent.com/scottburton11/66a921c458f9500a773a6b0ac65006df/raw/629bfd6a3125e3428bd85a53231bd8018c407a65/Javascript%2520Working%2520With%2520Data%2520Challenge%2520data')
    .then(res => this.setState({cars : res.data }))
  }

  
 
 
  render() {
    return (
    
      <div className="carfinder">
        <div className="carfinder-holder">
          <Cars cars={this.state.cars} key={uuid.v4()}/>
        </div>
      </div>

    );
  }
}

export default App;


