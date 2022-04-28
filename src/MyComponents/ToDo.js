import React from 'react'

export const ToDo = ({toDoItemList, onDelete}) => {
    return (
        <div>
            <h4> {toDoItemList.titleOfJob} </h4>
            {toDoItemList.jobDescription} <br />
            <button className="btn btn-sm btn-danger" onClick={() => {onDelete(toDoItemList)}}>Delete</button>
        </div>
    
    )
}
