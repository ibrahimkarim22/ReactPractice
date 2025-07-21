/**Progress Bar                https://www.reacterry.com/portal/challenges/progress-bar
Create a component called ProgressBar displays a progress bar. The progress bar should have the following styling applied:

A width of 100%
A height of 20px
A border radius of 5px
The completed bit should be green
The remaining bit should be lightgrey
The component should accept a percent prop which is used to determine how many percents of the progress bar to fill with green colour. 
You can use styled-components library to achieve the desired result
*/

/*my solution*/

import styled from 'styled-components'

const Wrapper = styled.div`
background-color: lightgrey;
width: 100%;
height: 20px;
border-radius: 5px;
`
const Bar = styled.div`
background-color: green;
height: 100%;
width: ${props => props.percent}%;
border-radius: 5px;
`;
const ProgressBar = ({ percent = 12 }) => {
 const percentage = Math.max(0, Math.min(percent, 100));
  return (
    <Wrapper data-testid="wrapper">
      <Bar data-testid="progress" percent={percentage} />
    </Wrapper>
  );
};

export default ProgressBar;


/* reacterry official solution */
/**import React from 'react';
import styled from 'styled-components'

const ProgressBar = ({ percent = 12 }) => {
  const cappedPercent = Math.min(Math.max(0, percent), 100);

  return (
    <Wrapper data-testid="wrapper">
      <FilledBar data-testid="progress" percent={cappedPercent} />
    </Wrapper>
  );
};

export default ProgressBar;

const Wrapper = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 5px;
  background-color: lightgrey;
`;

const FilledBar = styled.div`
  height: 100%;
  background-color: green;
  border-radius: 5px;
  width: ${props => props.percent}%;
`; */