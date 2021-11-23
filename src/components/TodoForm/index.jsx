import React, { useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ onAddTodo }) => {
  const [inputValues, setInputValues] = useState("");

  const handleChange = (event) => {
    setInputValues(event.target.value);
  };

  const handleAdd = () => {
    setInputValues("");
    onAddTodo(inputValues);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.inputField}
        value={inputValues}
        onChange={handleChange}
      />
      <button className={styles.button} onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default TodoForm;
