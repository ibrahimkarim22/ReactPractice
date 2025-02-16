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

    const clearAllTasks = () => {
        setTasks([]);
        localStorage.removeItem("TASKS");
    };

    return (
        <>
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
                            {task.text}
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
