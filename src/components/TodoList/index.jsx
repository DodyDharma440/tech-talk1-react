import React from "react";
import TodoItem from "../TodoItem";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  return (
    <div className={styles.container}>
      {todos.length === 0 ? (
        <p className={styles.placeholderText}>Belum ada todo</p>
      ) : (
        todos.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              item={todo}
              id={index}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
            />
          );
        })
      )}
    </div>
  );
};

export default TodoList;
