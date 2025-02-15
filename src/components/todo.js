import { useState } from "react";

const ToDoList = () => {

    const [toDo, setToDo] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task.trim() === "") return;
        setToDo([...toDo, task]);
        setTask(""); //clear input after adding task to the array of toDo
    }

    return (
        
        <>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={addTask}>Add</button>
            <ul>
               {toDo.map((item, index) => (
                <li key={index}>{item}</li>
               ))}
            </ul>
        </>

    );

}

export default ToDoList;