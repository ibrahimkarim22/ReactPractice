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


const ProgressBar = ({ percent = 12 }) => {

const Bar = styled.div`
width: ${percent}%;
height: 20px;
border-radius: 5px;
`;
  return (
    <div data-testid="wrapper">
      <div data-testid="progress" 
      />
    </div>
  );
};

export default ProgressBar;