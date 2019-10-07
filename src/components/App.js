import React from 'react';
import Form from './Form'
import Result from './Result'
import './App.css';


class App extends React.Component {
  state = {
    value: ""
  }

  onWriteUnlock = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <Form value={this.state.value} unlock={this.onWriteUnlock}/>
        <Result />

      </div>
    );
  }

}

export default App;
