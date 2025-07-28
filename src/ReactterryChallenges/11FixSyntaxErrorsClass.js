/**https://www.reacterry.com/portal/challenges/class-syntax-errors */

/**Fix syntax errors - class
You have been provided with a class component called App. 
The component keeps track of a count value stored in its 
state and displays it to the user. The user should be able to
 increment the count by clicking on a button, however, the code
  contains some bugs that need to be fixed.

Once the bugs have been fixed, the component should display the
 correct count value and log a message to the console only when 
 the count value changes. */


 /*my solution*/

 import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    count: 0
  };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log(`Count has been updated to: ${this.state.count}`);
    }
  }

  incrementCount = () => {
    this.setState((prev) => ({count: prev.count + 1}))
  };

  render() {
    return (
      <div>
        <h1 data-testid='title'>Counter</h1>
        <p data-testid='count'>Current Count: {this.state.count}</p>
        <button data-testid='button' onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}

export default App;


