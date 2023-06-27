
import React, { Fragment, useState } from 'react'

const EditTodo = ({ todo }) => {

    const [description, setDescription] = useState(todo.description);

    //edit description functoin
    const changeTodo = async (e) => {
        e.preventDefault();
        try
        {
            const body = { description };
            const response = await fetch(`http://localhost:5001/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/"
        } catch (error)
        {
            console.log(error.message)
        }
    }


    return (

        <Fragment >
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
                Edit
            </button>

            {/* <!-- The Modal --> */}
            <div className="modal" id={`id${todo.todo_id}`} onClick={() => setDescription(todo.description)}>
                <div className="modal-dialog">
                    <div className="modal-content" >

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Todo</h4>
                            <button type="button" className="close" data-dismiss="modal" onClick={() => setDescription(todo.description)}>&times;</button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <form onSubmit={e => changeTodo(e)}>
                                <input type="text" className='form-control' value={description} onChange={e => setDescription(e.target.value)} />
                            </form>
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => changeTodo(e)}>Edit</button>

                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default EditTodo