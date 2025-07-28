/*https://www.reacterry.com/portal/challenges/temperature-converter*/

/**
 *Temperature Converter
Write a component called App which accepts the temperature 
input in Celsius and converts it to Kelvin and Fahrenheit.
Your component should have one input JSX element of type 
number that accepts input from the user.

Your component should return the following string in the 
p JSX element, as indicated in the starting code:

{X}°C is {Y}°F and {Z}K.

Remember that X, Y and Z represent the temperature in Celsius,
Fahrenheit and Kelvin respectively.

Use the formulas below for the conversions.

Celsius to Kelvin: K = C + 273.15

Celsius to Fahrenheit: F = (C * 9/5) + 32

You should round any output numbers to 2 decimal points.
Return the output string in the p element.
 */

/* my solution */

import { useState } from 'react';

const App = () => {

 const [ temp, setTemp ] = useState(0);

const celFah = (temp) => Math.round((temp * 9/5 + 32) * 100) / 100; 
const celkel = (temp) => (temp + 273.15).toFixed(2);

  return (
    <div>
      <form>
        <input
          data-testid='input-id'
          name="input"
          type="number"
          value={temp}
          onChange={(e) => setTemp(parseFloat(e.target.value))}
        />
        <label for="input">°C</label>
      </form>
      <p data-testid='output'>
         {temp}°C is {celFah(temp)}°F and {celkel(temp)}K.
      </p>
    </div>
  );
};

export default App;

/*

import { useState } from 'react';

const App = () => {

 const [ celcius, setCelcius ] = useState(0);

  return (
    <div>
      <form>
        <input
          data-testid='input-id'
          name="input"
          type="number"
          value={celcius}
          onChange={(e) => setCelcius(Math.round((parseFloat(e.target.value) || 0) * 2))}
        />
        <label for="input">°C</label>
      </form>
      <p data-testid='output'>
         {celcius}°C is {((celcius * (9/5)) + 32).toFixed(2)}°F and {(celcius + 273.15).toFixed(2)}K
      </p>
    </div>
  );
};

export default App;
*/


/**import { useState } from 'react';

const App = () => {

 const [ temp, setTemp ] = useState(0);

const celFah = (temp) => ((temp * 9 / 5) + 32).toFixed(2);
const celkel = (temp) => (temp + 273.15).toFixed(2);

  return (
    <div>
      <form>
        <input
          data-testid='input-id'
          name="input"
          type="number"
          value={temp}
          onChange={(e) => setTemp(parseFloat(e.target.value))}
        />
        <label for="input">°C</label>
      </form>
      <p data-testid='output'>
         {temp}°C is {celFah(temp)}°F and {celkel(temp)}K
      </p>
    </div>
  );
};

export default App;import { useState } from 'react';

const App = () => {

 const [ temp, setTemp ] = useState(0);

const celFah = (temp) => ((temp * 9 / 5) + 32).toFixed(2);
const celkel = (temp) => (temp + 273.15).toFixed(2);

  return (
    <div>
      <form>
        <input
          data-testid='input-id'
          name="input"
          type="number"
          value={temp}
          onChange={(e) => setTemp(parseFloat(e.target.value))}
        />
        <label for="input">°C</label>
      </form>
      <p data-testid='output'>
         {temp}°C is {celFah(temp)}°F and {celkel(temp)}K
      </p>
    </div>
  );
};

export default App; */

/*reacterry class based solution*/
/*
import React, { Component } from 'react';

class App extends Component {
  state = {
    temperature: 0,
  };

  celsiusToFahrenheit = (temp) => {
    return Math.round((temp * 9/5 + 32) * 100) / 100;
  };

  celsiusToKelvin = (temp) => {
    return Math.round((temp + 273.15) * 100) / 100;
  };

  handleChange = (e) => {
    this.setState({ temperature: parseFloat(e.target.value) });
  };

  render() {
    const { temperature } = this.state;
    return (
      <div>
        <form>
	  <input
	    data-testid='input-id'
	    name="input" 
	    type="number"
	    value={temperature}
	    onChange={this.handleChange}
	  />
  	  <label for="input">°C</label>
	</form>
        <p data-testid='output'>
          {temperature}°C is {this.celsiusToFahrenheit(temperature)}°F and {this.celsiusToKelvin(temperature)}K.
        </p>
      </div>
    );
  }
}

export default App;

*/