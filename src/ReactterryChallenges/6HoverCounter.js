/**https://www.reacterry.com/portal/challenges/hover-counter */

/**Hover Counter
Create a component called App that displays the number
of times the user has hovered a button with the text
“Hover Me”. The count should be displayed in an h1
element and updated each time the user hovers over
the button. The initial value of the count should 
be set to 0. 
Set the initial value of the hover count to 0.
Return a button element with the text Hover Me.
Do not edit the data-testid attributes.
*/

/*my solution*/

import { useState } from 'react'; 

const App = () => {
  
  const [hoverCount, setHoverCount ] = useState(0);
   
   const handleHover = () => {
     setHoverCount(prev => prev + 1);
   }

  return (
    <div>
      <button data-testid='button' onMouseEnter={handleHover}>Hover Me</button>
      <h1 data-testid='count'>{hoverCount}</h1>
    </div>
  );
};

export default App;


/*reactberry class-based solution*/

/*
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleMouseEnter = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  render() {
    return (
      <div>
        <button data-testid='button' onMouseEnter={this.handleMouseEnter}>Hover Me</button>
        <h1 data-testid='count'>{this.state.count}</h1>
      </div>
    );
  }
}

export default App;


*/
