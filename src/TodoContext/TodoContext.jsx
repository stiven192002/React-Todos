// src/TodosContext/TodosContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Creamos el contexto
export const TodosContext = createContext();

// Hook que gestiona la lógica
function useTodosProvider() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem("TODOS_V1");
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem("TODOS_V1", JSON.stringify([]));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    }, 1000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem("TODOS_V1", JSON.stringify(newItem));
    setItem(newItem);
  };

  const toggleTodos = (index) => {
    const newTodos = [...item];
    newTodos[index].completed = !newTodos[index].completed;
    saveItem(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...item];
    newTodos.splice(index, 1);
    saveItem(newTodos);
  };

 
  return {
    todos: item,
    loading,
    error,
    filter,
    setFilter,
    toggleTodos,
    deleteTodo,
  };
}

// Proveedor que envolverá tu App
export function TodosProvider({ children }) {
  const todos = useTodosProvider();

  return (
    <TodosContext.Provider value={todos}>
      {children}
    </TodosContext.Provider>
  );
}

// Hook para consumir el contexto
export function useTodos() {
  return useContext(TodosContext);
}
