import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import './App.css';

function Todolist() {
    const[todos,setTodos]=useState([])

    const addTodo=todo =>{
      if(!todo.text){
        alert("please Enter a valid 'todo'")
        return
      }
       const newTodos=[todo,...todos]

       setTodos(newTodos);
    };

   

    const removeTodo=id=>{
      const removeArr=[...todos].filter(todo => todo.id !== id);

      setTodos(removeArr); 
    }

    const completeTodo=id=>{
      let updatedTodos=todos.map(todo=>{
        if(todo.id===id){
          todo.iscomplete=!todo.iscomplete;
        }
        return todo;
      });

      setTodos(updatedTodos);
    }
  return (
    <div>
        <h1>Today's plan</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>

    </div>
  )
}

export default Todolist