/**https://www.reacterry.com/portal/challenges/local-storage-2 */

/**
 * Local Storage II - hook
You need to create a custom hook called useLocalStorage(key, initialValue)
that can be used to store and retrieve data from local storage. You should 
use the key prop as the key for the data in local storage and initialValue
as the initial value.

The hook should return an object with two properties:

the current value of the data, which should be initialized to
 the value stored in local storage (if it exists), or the initialValue
  argument (if it doesn't)
a function that can be used to update the value of the data in local storage
Every time the value of the data is updated, the hook should update the
 corresponding value in local storage.
 */

 /*my solution*/

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
    
    const [ value, setValue ] = useState(() => {
      const storedValue = localStorage.getItem(key);
      try {
      return storedValue !== null ? storedValue : initialValue;
      } catch {
       return console.error('ERROR: ', Error)
      }
    });


  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value])

  return {value, setValue};
};

const App = () => {
  const {value, setValue} = useLocalStorage('inputValue', '');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default App;


/*reacterry's solution*/

/**
 * import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return {value, setValue};
};

const App = () => {
  const {value, setValue} = useLocalStorage('inputValue', '');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default App;
 */