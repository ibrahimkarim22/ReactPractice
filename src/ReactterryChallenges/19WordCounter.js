/**https://www.reacterry.com/portal/challenges/word-counter */

/**Word Counter
Write a simple component called App where the user can
 paste a text block and the component will return the
  total count of words in the article. Your app should 
  render the Your article has X word(s) text back to the 
  user immediately after they paste in their article. */

  /**my solution */
import { useState, useEffect } from 'react';


const App = () => {
  
  const [ wordsStr, setWordsStr ] = useState('');
  const [ wordsArr, setWordsArr ] = useState([])


useEffect(() => {
  const parts = wordsStr.trim()
    ? wordsStr.trim().split(/\s+/)
    : [];
  setWordsArr(parts);
}, [wordsStr]);



  return (
    <>
      <textarea data-testid='textarea-id' value={wordsStr} onChange={(e) => {
        setWordsStr(e.target.value)
        console.log(wordsStr)
        
      }}/>
      <h1 data-testid='output-id'>Your article has {wordsArr.length} {wordsArr.length === 1 ? 'word' : 'words'}</h1>
    </>
  )
}

export default App


  /*Reacterry's solution*/

/**import React, { useState } from 'react'

const countWords = (text) => {
  if (text.length === 0) return 0
  return text.trim().split(/\s+/).length
}

const App = () => {
  const [text, setText] = useState('')
  return (
    <>
      <textarea data-testid='textarea-id' value={text} onChange={e => setText(e.target.value)}/>
      <h1 data-testid='output-id'>Your article has {countWords(text)} {countWords(text) === 1 ? 'word' : 'words'}</h1>
    </>
  )
}

export default App */