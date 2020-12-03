import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component{
  state ={response: {body: ''}}

  componentDidMount= async ()=>{
    const results = await axios.get('/api/v1/say-something')
      const response = results.data;
      this.setState({response})
  }

  getContent =()=>{
    const {response} = this.state
    let body;
    for(const res in response){
      body = res
    }
    return body;
  }
  render(){
    console.log('response ', this.state.response);
    const {response}= this.state;
    return(
      <div data-testid="div-container">
        <h1>Hello from front end</h1>
        <h2>{response.body}</h2>
      </div>
    )
  }
}

export default App;
