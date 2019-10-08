import React from 'react';
import Form from './Form'
import Result from './Result'
import './App.css';


class App extends React.Component {
  state = {
    value: '', 
    city: '',
    date:'',
    sunrise:'',
    sunset:'',
    temperature:'',
    wind:'',
    pressure:'',
    formError:''
  }

  onWriteUnlock = (e) => {
    this.setState({ value: e.target.value })
  }

  handleCitySubmit=(e)=>{
    e.preventDefault()
    // const API = 'http://samples.openweathermap.org/data/2.5/weather?q=${this.state.value},uk&appid=a0a75a5ef8ff7f89910316e0784e7828?units=metric'
    const API = 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.value+'&APPID=a0a75a5ef8ff7f89910316e0784e7828'
    console.log("city submited")
    fetch(API)
    .then(response => {
      if(response.ok){
        return response
      }
    })
    .then(response=>response.json())
    .then(gucio=>console.log(gucio))
    .catch(formError=> console.log(formError))
  }

  render() {
    return (
      <div className="App">
        <Form value={this.state.value} unlock={this.onWriteUnlock} submit={this.handleCitySubmit}/>
        <Result />

      </div>
    );
  }

}

export default App;
