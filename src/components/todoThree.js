import {useState} from 'react';

const ToDoThree = () => {

    const [list, setList] = useState([]); 
    const [task, setTask] = useState('');

    const ADD_TASK = () => {
        if (task.trim() !== '') {

            setList([...list, task])
            setTask('');  
        }
    }

    const REMOVE_TASK = (index) => {
        setList(list.filter((_, i) => i !== index));
    }

    return (
        <>
        <h1>My Tasks</h1>
        <br />
        <ul>
            {list.length > 0 ? (
            list.map((item, index) => (
     
                    <li key={index}>{item}
                    <button onClick={() => REMOVE_TASK(index)}>Remove</button>
                    </li> 
         
            ))
        ) : (
            <li>no tasks yet.</li>
        )}
        </ul>
        <br />
        <label>
            <input placeholder='add tasks here...' type='text' value={task} onChange={(e) => setTask(e.target.value)} />
        </label>
        <button onClick={ADD_TASK}>Add</button>
        
        </>
    )
};

export default ToDoThree;