/**https://www.reacterry.com/portal/challenges/styled-button */

/**Create a component called App that renders a button with the text
 *  “Click me!”. The button should have the following styles:

A solid blue background color
A white text color
A font size of 16px
A padding of 10px 20px
A border-radius of 5px
A pointer cursor
A hover effect that changes the background 
color to light blue and the text color to black.

You can use styled-components library to achieve the desired result
Your component should return just one button JSX element
The button should contain string “Click me!”
*/

/* my solution */
import styled from 'styled-components';

const ButtonHover = styled.button`
background-color: blue;
color: white;
font-size: 16px;
padding: 10px 20px;
border-radius: 5px;
cursor: pointer;
&:hover {
  background-color: lightblue;
  color: black;
}
`

const App = () => {
  return(

  <ButtonHover>Click me!</ButtonHover>
  )
};

export default App;

/*reacterry's official solution*/

/**import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: lightblue;
    color: black;
  }
`;

const App = () => {
  return (
    <StyledButton>Click me!</StyledButton>
  );
};

export default App; */