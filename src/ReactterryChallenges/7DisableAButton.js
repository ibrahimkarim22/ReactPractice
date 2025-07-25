/*https://www.reacterry.com/portal/challenges/disable-a-button*/

/**Disable a button
Write a component called App which returns two JSX elements. 
The first one is an input of type text and the second one is
a button with the text “Click”. Your task is to disable the 
button when the input string has less than 3 characters. 

Return a button element with the text Click.
Disable the button if the current value of the input 
is less than 3 characters long.
*/

/*my solution*/

import { useState } from 'react';


const App = () => {

  const [value, setValue] = useState('');

  return (
    <>
      <input data-testid="input-id" onChange={(e) => setValue(e.target.value)} />

      {value.length < 3 ?

        <button data-testid="button-id" disabled>Click</button> :

        <button data-testid="button-id">Click</button>
      }
    </>
  )
}

export default App

/********************** */

/*my class based solution*/

/**import React from 'react';


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: ''
    }
  }

  render() {
    return (
      <>
        <input data-testid="input-id" onChange={(e) => this.setState({ count: e.target.value })} />
        <button data-testid="button-id" disabled={this.state.count.length < 3}>Click</button>
      </>
    )
  }
}

const App = () => (
  <Counter />
)

export default App  */

/************************************************* */


/*reacterry class solution*/

/**
 import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <>
        <input data-testid="input-id" type="text" value={this.state.text} onChange={this.handleChange} />
        <button data-testid="button-id" disabled={this.state.text.length < 3}>Click</button>
      </>
    );
  }
}

export default App;
 */