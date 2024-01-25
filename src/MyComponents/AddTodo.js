import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Title or Description cannot be blank")
        }
        else {
            addTodo(title, description);
            setTitle("");
            setDescription("");
        }
    }

    let addTodoStyle = {
        margin: "15px 50px",
    }

    return (
        <div className='Container' style={addTodoStyle}>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Todo Description</label>
                    <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }}
                        className="form-control" id="description" />
                </div>

                <button type="submit" className="btn btn-sm btn-success">Add Todo </button>
            </form>

        </div>
    )
}
