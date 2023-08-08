

export default function ToDo({todo, toggleComplete, removeToDo}){
    return(
        <li className="task-li" onClick={()=> toggleComplete(todo.id)}>
           <span className="task"> {todo.task}</span>
           <button className="remove-button" onClick={() =>removeToDo(todo.id)}>Löschen</button>
        </li>
    )
}