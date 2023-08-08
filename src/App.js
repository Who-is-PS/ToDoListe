
import './App.css';
import { useState } from 'react';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = (task) =>{
    const newToDo = {id: Date.now(), task, completed: false};
    setTodos([...todos, newToDo]);
  };

  const removeToDo = (id) =>{
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const toggleComplete = (id) =>{
    const newToDos = todos.filter(todo => todo.id !== id);
    setTodos(newToDos);
  };

  return(
    <div className='App'>
      <AddToDo addToDo ={addToDo} />
      <ToDoList todos ={todos} removeToDo={removeToDo} toggleComplete={toggleComplete} />
      
    </div>
  )
}



export default App;
