import {useState} from 'react';

const CharacterCounter = () => {

    const [char, setChar] = useState('');

    return (
        <>
        <h1>Character Counter</h1>

        <label>
            enter text
            <input type='text' value={char} onChange={(e) => setChar(e.target.value)} />
        </label>

         {char.length < 50 ? (
            <p>Character Count: {char.length}
            </p>   
        ) : (
            <p style={{color: 'red'}}>{char.length} (Limit Exceed!)</p> 
        )
    
    }
        </>
    )
};

export default CharacterCounter;