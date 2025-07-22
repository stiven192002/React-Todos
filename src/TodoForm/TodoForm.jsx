import React, { useState, useContext } from "react";
import "./TodoForm.css";
import { TodosContext } from "../TodoContext/TodoContext.jsx";

function TodoForm() {
  const { addTodos, setOpenModal } = useContext(TodosContext);
  const [newTodosValue, setNewTodosValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodos(newTodosValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodosValue(event.target.value);
  };

  return (
    <div className="TodoForm-overlay">
      <form className="TodoForm" onSubmit={onSubmit}>
        <label>Crea tu nuevo todo</label>
        <textarea
          placeholder="Crea tu nuevo todo"
          value={newTodosValue}
          onChange={onChange}
          required
        />
        <div className="TodoForm-buttonContainer">
          <button type="button" onClick={onCancel}>
            Cancelar
          </button>
          <button type="submit">Añadir</button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
