import React, { Component } from 'react';
import '../styles/App.css';
import TodoApp from '../components/TodoApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>TODO App in React.JS</h2>
        </div>
        <TodoApp/>
      </div>
    );
  }
}

export default App;
