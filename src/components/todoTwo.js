import { useEffect, useState } from "react";

const ToDoTwo = () => {
    const [tasks, setTasks] = useState(() => {
        try {
            const storedTasks = JSON.parse(localStorage.getItem("TASKS"));
            return Array.isArray(storedTasks) ? storedTasks : [];
        } catch (error) {
            console.error("Error parsing tasks from localStorage:", error);
            return [];
        }
    });

    const [newTask, setNewTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editedText, setEditedText] = useState(""); 

    useEffect(() => {
        localStorage.setItem("TASKS", JSON.stringify(tasks));
    }, [tasks]);


    const addTask = () => {
        if (newTask.trim() === "") return;
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask("");
    };

 
    const toggleCompleteTask = (index) => {
        setTasks(
            tasks.map((task, i) =>
                i === index ? { ...task, completed: !task.completed } : task
            )
        );
    };


    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };


    const startEditing = (index) => {
        setEditIndex(index);
        setEditedText(tasks[index].text);
    };


    const saveTask = (index) => {
        if (editedText.trim() === "") return;
        setTasks(
            tasks.map((task, i) =>
                i === index ? { ...task, text: editedText } : task
            )
        );
        setEditIndex(null); 
    };

   
    const clearAllTasks = () => {
        setTasks([]);
        localStorage.removeItem("TASKS");
    };

    return (
        <>
            <h2>To-Do List</h2>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>

            <ol>
                {tasks.length === 0 ? (
                    <p>No tasks yet!</p>
                ) : (
                    tasks.map((task, index) => (
                        <li key={index} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleCompleteTask(index)}
                            />

                            {editIndex === index ? (
                                <input
                                    type="text"
                                    value={editedText}
                                    onChange={(e) => setEditedText(e.target.value)}
                                />
                            ) : (
                                <span>{task.text}</span>
                            )}

                            {editIndex === index ? (
                                <button onClick={() => saveTask(index)}>Save</button>
                            ) : (
                                <button onClick={() => startEditing(index)}>Edit</button>
                            )}

                            <button onClick={() => removeTask(index)}>Remove</button>
                        </li>
                    ))
                )}
            </ol>

            <button onClick={clearAllTasks}>Clear All Tasks</button>
        </>
    );
};

export default ToDoTwo;
