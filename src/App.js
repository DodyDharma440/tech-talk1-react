import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const FunctionalComponent = ({ message, triggerAlert }) => {
  return (
    <div>
      <p>message : {message}</p>
      <button onClick={triggerAlert}>alert</button>
    </div>
  );
};

function App() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  const addTodo = (value) => {
    setTodos([
      ...todos,
      {
        title: value,
        isComplete: false,
      },
    ]);
  };

  const deleteTodo = (idx) => {
    const newTodos = todos.filter((todo, index) => index !== idx);

    setTodos(newTodos);
  };

  const toggleComplete = (idx) => {
    const todoIndex = todos.findIndex((todo, index) => index === idx);
    const { isComplete } = todos[todoIndex];

    todos[todoIndex] = {
      ...todos[todoIndex],
      isComplete: !isComplete,
    };

    setTodos([...todos]);
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <TodoForm onAddTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      </header>

      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}

export default App;
