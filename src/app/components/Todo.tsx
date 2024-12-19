"use client"
import { useState } from 'react'

interface Todo{
    id:number;
    task: string;
}

const TodoApp = ()=>{
    const [task , setTask] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTask = ()=>{
        if (task.trim() === '') return;
        const newTask = {id: Date.now(), task};
     setTodos([...todos , newTask]);
    setTask("");
}

const deleteTask = (id: number)=>{
    setTodos(todos.filter(todos => todos.id !== id))
}


 return(
    <div className='main'>
        <div className='input-sec'>
            <input id='input'
            type="text"
            value={task}
            onChange={(e)=> setTask(e.target.value)}
            placeholder='add task'
            />
            <button onClick={addTask} disabled={!task} id='addBtn'>Add Task</button>
        </div>
        <ul>
            {todos.map((todo)=>(
                <li id='task' key={todo.id}>
                {todo.task}
                <button onClick={()=> deleteTask(todo.id)} id='deleteBtn'>Delete</button>
                </li>
            ))}
        </ul>
    </div>
 );

};
export default TodoApp

