/**https://www.reacterry.com/portal/challenges/todo-list */

/**Todo List
Create a simple to-do list component called App that allows
 the user to add string “todos” to the to-do list. The app 
 should display them back to the user in an unordered list. 
 You should use an input element of type text to gather your todos. */

 /*my solution*/
import { useState } from 'react';

const App = () => {

  const [todos, setTodos] = useState([]);
  const [activity, setActivity] = useState('');

  const handleClick = () => {
    setTodos(prev => [...prev, activity])
    setActivity('');
  }
  return (
    <div>
      <input data-testid="input-id" value={activity} onChange={(e) => setActivity(e.target.value)} />
      <button data-testid="button-id" onClick={handleClick}>Add a todo</button>
      <ul data-testid="ul-id" key={todos.index}>
        {todos.map((todo, index) => {
          return (
            <li key={index}>{todo}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App

 /*reacterry's solution*/

 /**
  * 
  * import React, { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([])
  const [currentTodo, setCurrentTodo] = useState('')

  const addTodo = () => {
    setTodos([...todos, currentTodo])
    setCurrentTodo('')
  }

  return (
    <div>
      <input data-testid="input-id" type="text" value={currentTodo} onChange={e => setCurrentTodo(e.target.value)} />
      <button data-testid="button-id" onClick={addTodo}>Add a todo</button>
      <ul data-testid="ul-id">
        {todos.map(el => <li>{el}</li>)}
      </ul>
    </div>
  )
}

export default App
  */