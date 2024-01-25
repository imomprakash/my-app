import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import { Footer } from './MyComponents/Footer';
import React, { useState, useEffect } from 'react';
import { cleanup } from '@testing-library/react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);

    SetTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  const addTodo = (title, description) => {
    console.log(" I am adding this todo", title, description)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;

    }
    const myTodo = {
      sno: sno,
      title: title,
      description: description,
    }
    SetTodos([...todos, myTodo]);
    console.log(myTodo);

    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const [todos, SetTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="My Todos List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />

    </>
  );
}

export default App;
