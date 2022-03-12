import React, {useState} from 'react'
import './App.css';

function TodoForm(props) {
    const [input,setInput]=useState('')

    const handlechange=e =>{
        setInput(e.target.value);
    }


    const handleSubmit= e => {
        e.preventDefault();
        
        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:input
        });

        setInput('');
    }
  
  
    return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <input
        type='text'
        placeholder='add a new todo here'
        value={input}
        name='text'
        className='todo-input'
        onChange={handlechange}
        />
        <button className='todo-button'>Add new todo</button>
    </form>
  )
}

export default TodoForm