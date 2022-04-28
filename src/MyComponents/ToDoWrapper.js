import { ToDo } from './ToDo'

export const ToDoWrapper = (props) => {
    return (
        <div className="container">
            <h3 className="my-3">To-Do List</h3>
            {props.listOfToDo.length === 0 ? "There are no items in your To-Do List, get some dude!" :
                    props.listOfToDo.map((value) => {
                        return <div key={value.serialNumber}><ToDo toDoItemList={value} onDelete={props.onDelete} /> <hr/></div>
                    })
            }
        </div>
    )
}