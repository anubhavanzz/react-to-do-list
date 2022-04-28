import React, { useState } from 'react';

export const AddToDoItem = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert('Title or desc cannot be blank!');
    } else {
      props.addItem(title, desc);
      setTitle("");
      setDesc("");
    }
  }
    return (
      <div className="container my-3">
        <h3> Add a To-Do Item...</h3>
        <form onSubmit={submit }>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" value={title} className="form-control" onChange={(e)=>setTitle(e.target.value)} id="title" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" />
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add Item</button>
</form>
        </div>
    )
}
