import * as React from 'react';
import SquareComponent from './components/SquareComponents';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SquareComponent color="blue" width={20} />
      </div>
    );
  }
}

export default App;
