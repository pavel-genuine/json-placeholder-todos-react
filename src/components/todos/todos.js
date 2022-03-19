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

            {
                console.log(todos)
            }
            {
            todos.map(element=><SingleTodo all={element} key={element.id} > </SingleTodo>)
            }
            
        </div>
    );
};

export default Todos;