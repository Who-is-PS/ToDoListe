import { useState } from "react";

export default function AddToDo({addToDo}){
    const[task, setTask] = useState("");

    const handleSubmit = (option) =>{
        option.preventDefault();
        if (task.trim()){
            addToDo(task);
            setTask("");
        }
    };

    return(
        <form className="form" onSubmit={handleSubmit}>
            <input 
            className="task-text"
            type="text"
            value={task}
            onChange={option => setTask(option.target.value)}
            placeholder="Füge ein ToDo hinzu" />
            <button className="hinzufuegen-button" type="submit">Hinzufügen</button>
        </form>
    )
}