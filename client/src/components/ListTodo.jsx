import React, { Fragment, useEffect, useState } from 'react';
import EditTodo from './EditTodo';

const ListTodo = () => {
    const [todos, setTodos] = useState([]);

    //delete todo function
    const deleteTodo = async (id) => {
        try
        {
            const deleteTodo = await fetch(`http://localhost:5001/todos/${id}`, {
                method: "DELETE"
            });
            setTodos(todos.filter(todos => todos.todo_id !== id));
        } catch (error)
        {
            console.log(error.message)
        }
    }

    const getTodos = async () => {
        try
        {
            const response = await fetch("http://localhost:5001/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (error)
        {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getTodos();
    }, []);


    return (
        <Fragment><h1 className='mt-5'>ListTodos</h1>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td><EditTodo todo={todo} /></td>
                            <td><button className='btn btn-danger' onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </Fragment>
    )
}

export default ListTodo;