/**
 * https://www.reacterry.com/portal/challenges/local-storage-1
 * 
 * Local Storage I             
Write a simple App component that returns an input field of type text.
Users can interact with the input field to type in any string they want.
You’re meant to store this string in local storage so that every time 
when the page reloads it pre-fills the input field with the latest known 
value for the users. 
*Do not edit the data-testid attributes.
*Use the reload button in the demo browser to test if your component works as expected.
*Use key inputValue to store the data in local storage.
*/
/*my solution*/

import { useState, useEffect } from "react";
const App = () => {
    const [search, setSearch] = useState(() => {
        return localStorage.getItem("searchText") || "";
    });

    useEffect(() => {
        localStorage.setItem("searchText", search);
    }, [search]);

    return (
        <div>
            <input
                data-testid="input-id"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};

export default App;

/*reacterry official solution*/
/**
 import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(localStorage.getItem('inputValue') || '');

  const handleChange = (e) => {
    setValue(e.target.value);
    localStorage.setItem('inputValue', e.target.value);
  };

  return (
    <div>
      <input data-testid='input-id' type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default App;
 */
