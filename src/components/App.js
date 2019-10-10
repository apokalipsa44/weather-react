import React from 'react';
import Form from './Form'
import Result from './Result'
import './App.css';

const API_KEY = '&APPID=a0a75a5ef8ff7f89910316e0784e7828';

class App extends React.Component {
  state = {
    value: '',
    city: '',
    date: '',
    sunrise: '',
    sunset: '',
    temperature: '',
    wind: '',
    pressure: '',
    formError: false
  }

  onWriteUnlock = (e) => {
    this.setState({ value: e.target.value })
  }

  handleCitySubmit = (e) => {
    e.preventDefault()
    // const API = 'http://samples.openweathermap.org/data/2.5/weather?q=${this.state.value},uk&appid=a0a75a5ef8ff7f89910316e0784e7828?units=metric'
    const API = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.value + API_KEY
    console.log("city submited")
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
      })
      .then(response => response.json())
      .then(gucio => {
        const time = new Date().toLocaleString();
        this.setState(prevState => ({
          date: time,
          sunrise: gucio.sys.sunrise,
          sunset: gucio.sys.sunset,
          temperature: gucio.main.temp,
          wind: gucio.wind.speed,
          pressure: gucio.main.pressure,
          formError: false,
          city: this.state.value
        }))
      })
      .catch(formError => {
        console.log(formError);
        this.setState(stan => ({
          formError: true,
          city: this.state.value
        }))
      })
  }


  render() {
    return (
      <div className="App">
        <Form value={this.state.value} unlock={this.onWriteUnlock} submit={this.handleCitySubmit} />
        <Result weatherObject={this.state} />

      </div>
    );

  }


}


export default App;
