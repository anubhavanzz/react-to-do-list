import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import { About } from './MyComponents/About';
import { AddToDoItem } from './MyComponents/AddToDoItem';
import { Footer } from './MyComponents/Footer';
import { Header } from './MyComponents/Header';
import { ToDoWrapper } from './MyComponents/ToDoWrapper';

function App() {
  const onDelete = (whichOne) => {
    console.log('called ', whichOne);
    setToDos(toDoList.filter((thatOne) => {
      return thatOne !== whichOne;
    }));
  }

  const [toDoList, setToDos] = useState([
    {
      serialNumber: 1,
      titleOfJob: "Learn React",
      jobDescription: "Learn React or make a small project!"
    },
    {
      serialNumber: 2,
      titleOfJob: "Learn Node",
      jobDescription: "Learn Node or make a small project!"
    },
    {
      serialNumber: 3,
      titleOfJob: "Learn GraphQL",
      jobDescription: "Learn GraphQl or make a small project!"
    },
    {
      serialNumber: 4,
      titleOfJob: "Learn MicroServices",
      jobDescription: "Learn MicroServices or make a small project!"
    }
  ]);

  const addItem = (title, desc) => {
    console.log(title, desc);
    const newToDoItem = {
      serialNumber: toDoList.length ? toDoList[toDoList.length-1] + 1 : 1,
      titleOfJob: title,
      jobDescription: desc
    };
    setToDos([...toDoList, newToDoItem]);
  }
  return (
    <>
      <Router>
        <Header title="To-do List" searchBarFlag={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddToDoItem addItem={ addItem}/>
                <ToDoWrapper listOfToDo={toDoList} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
