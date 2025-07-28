/*https://www.reacterry.com/portal/challenges/click-me*/

/*Click me
Write a simple component called App that displays a button
with the text "Click me!" and logs a “Clicked!” message to the console when clicked. */

/*my solution*/

const App = () => {
  const message = () => {
    console.log('Clicked!');
  }
  return (
    <button data-testid='button' onClick={message}>Click me!</button>
  )
}

export default App

/*reacterry class based solution*/

/**

import React, {Component} from React;

class App extends Component {
   handleClick = () => {
    console.log('Clicked!');
  }

  render() {
    return (
      <button data-testid='button' onClick={this.handleClick}>Click Me!</button>
    )
  }
}

export default App;
 
 */