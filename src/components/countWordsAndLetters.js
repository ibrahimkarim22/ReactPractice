import {useState} from 'react';


const CountLettersAndWords = () => {

    const [words, setWords] = useState('');
    
    const wordCount = words.trim() === "" ? 0 : words.trim().split(/\s+/).length;

    const charCount = words.length;

    return(
        <>
        <h1>Type Text below</h1>

        <textarea
        rows="5"
        cols="40"
        value={words}
        onChange={(e) => setWords(e.target.value)}/>
        
        <p>Word Count: {wordCount}</p>
        <p>Character Count: {charCount}</p>
        </>


    )
}

export default CountLettersAndWords;