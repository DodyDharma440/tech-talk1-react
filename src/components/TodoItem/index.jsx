import React from "react";
import classNames from "classnames";
import styles from "./TodoItem.module.css";

const TodoItem = ({ item, deleteTodo, id, toggleComplete }) => {
  const handleChange = (e) => {
    toggleComplete(id);
  };

  return (
    <div
      className={classNames(styles.card, {
        [styles.todoItemComplete]: item.isComplete,
      })}
    >
      <p className={styles.todoLabel}>{item.title}</p>
      <div>
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={handleChange}
        />
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
