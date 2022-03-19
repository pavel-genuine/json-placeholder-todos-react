import React from 'react';

const SingleTodo = (props) => {

    const { completed, id, title}=props.all

    return (
        <div>
            <h3>Completion Status: {completed? "true": "false"}</h3>
            <h3> ID : {id}</h3>
            <p>Titile : {title}</p>
        </div>
    );
};

export default SingleTodo;