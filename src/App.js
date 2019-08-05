import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.calculateSqrt = this.calculateSqrt.bind(this);
    this.state = {
      sqrtValue: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Type a number to get its square root value
        </header>
        <div>
          <input id="valueToGetSqrt" type="number" min="1" style={{margin: '2%'}}></input>
          <button type="submit" onClick={this.calculateSqrt}>Submit</button>
        </div>
        <h2>
          {this.state.sqrtValue}
        </h2>
      </div>
    );
  }

  calculateSqrt() {
    let valueToGetSqrt = document.getElementById('valueToGetSqrt').value;
    let sqrtValue;
    sqrtValue = valueToGetSqrt ? Math.sqrt(valueToGetSqrt) : '';
    this.setState({
      sqrtValue
    });
  }
}

export default App;
