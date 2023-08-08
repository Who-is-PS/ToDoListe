import ToDo from "./ToDo"


export default function ToDoList({todos, toggleComplete, removeToDo}){
    return(
        <ul className="unordered-list">
            {todos.map(todo =>(
                <ToDo key={todo.id} todo={todo} toggleComplete={toggleComplete} removeToDo={removeToDo}/>
            ))}
        </ul>
    )
}