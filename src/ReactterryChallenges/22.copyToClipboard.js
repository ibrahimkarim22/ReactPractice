/**https://www.reacterry.com/portal/challenges/copy-to-clipboard */

/** Copy to clipboard

Write a component CopyToClipboard which accepts one string prop str. 
This component has to return a button with the initial text content “Copy”. 
When the button is clicked, the value of the str prop has to be copied to
the clipboard. After the button has been clicked, change its text content
to “Copied” for 1 second.

The prop is defined with a default value of “test-input”. Keep in mind that 
once in production use, the value of str will be dynamic.

We have already provided you with a styled component Button, feel free to
 update it as you wish.*/

/**my solution */

import styled from "styled-components";
import { useState } from 'react';




const CopyToClipboard = ({ str = 'test-input' }) => {


  const [clicked, setClicked] = useState(false);

  const text = clicked ? 'copied' : 'copy';

  const handleClick = () => {

    navigator.clipboard.writeText(str);

    setClicked(true)
    setTimeout(() => { setClicked(false) }, 1000)
  }






  return (
    <Button onClick={handleClick}>{text}</Button>
  )
}

export default CopyToClipboard

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;


/**reacterry's solution */

/**
 *
 import { useState } from "react"
import styled from "styled-components";

const CopyToClipboard = ({ str = 'test-input' }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(str)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <Button onClick={handleCopy}>{copied ? 'Copied' : 'Copy'}</Button>
  )
}

export default CopyToClipboard

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

 */