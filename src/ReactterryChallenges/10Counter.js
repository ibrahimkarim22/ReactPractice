/* https://www.reacterry.com/portal/challenges/counter*/

/**Counter
Write a component called App. Add two buttons,
 one with the text “Increment” and the other with the text “Decrement”.
  This component should track the difference between how many times the 
  Increment vs Decrement buttons were clicked. Display the current count to 
  the page in an h1 element. */

  /*my class based solution*/

import React, {Component} from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment = () => {
    this.setState((prev) => ({count: prev.count + 1}))
  }

  decrement = () => {
    this.setState((prev) => ({count: prev.count - 1}))
  }

  render() {
    return (
      <>
        <h1 data-testid="count">{this.state.count}</h1>
        <button data-testid="increment" onClick={this.increment}>Increment</button>
        <button data-testid="decrement" onClick={this.decrement}>Decrement</button>
      </>
    )
  }

}

export default App;

  /*my funcional solution*/

/*
import { useState } from 'react';


const App = () => {

  const [ count, setCount ] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  }

  const decrement = () => {
    setCount((prev) => prev - 1);
  }
  
  return (
    <>
      <h1 data-testid="count">{count}</h1>
      <button data-testid="increment" onClick={increment}>Increment</button>
      <button data-testid="decrement" onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
*/


/*reacterry class based solution*/

/**
 import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }

  render() {
    return (
      <>
        <h1 data-testid="count">{this.state.count}</h1>
        <button data-testid="increment" onClick={this.increment}>Increment</button>
        <button data-testid="decrement" onClick={this.decrement}>Decrement</button>
      </>
    );
  }
}

export default App

 */