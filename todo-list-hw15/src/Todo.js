import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todolist from './Todolist'
import './App.css'


function Todo({todos,removeTodo}) {
    const [edit,setEdit]=useState({
        id:null,
        value:''
    })


  return todos.map((todo,index) => (
    
        <div className='todo-row'>
            <input type='checkbox' className="check-box"/>

        <div key={todo.id} >
            {todo.text}
        </div>

        <button onClick={()=>removeTodo(todo.id)} className="delet-btn">delet</button>
        </div>
    ));
}

export default Todo