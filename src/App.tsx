import * as React from 'react';
import SquareComponent from './components/SquareComponents';
// import SquareInterface from './components/SquareInterface';
import './App.css';

class App extends React.Component {
  // createSquare = () => {

  // }

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
