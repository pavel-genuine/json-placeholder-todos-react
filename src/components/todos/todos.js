import React, { useEffect, useState } from 'react';
import SingleTodo from '../singleTodo/singleTodo';

const Todos = () => {

    const [todos , setTodo]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(data=>setTodo(data))
    },[])

    return (
        <div>
           <h1>{todos.length}</h1>
            {
            todos.map(element=><SingleTodo all={element} key={element.id} > </SingleTodo>)
            }
            
        </div>
    );
};

export default Todos;