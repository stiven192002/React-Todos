// src/App.jsx
import React from 'react';
import './App.css';
import TodoSearch from './TodoSearch/TodoSearch.jsx';
import TodoCounter from './TodoCounter/TodoCounter.jsx';
import TodoList from './TodoLits/TodoLits.jsx';
import TodoItem from './TodoItem/TodoItem.jsx';
import TodoButton from './TodoButtom/TodoButtom.jsx';
import TodosLoading from './TodosLoading/TodosLoading.jsx';
import TodosError from './TodosError/TodosError.jsx';
import EmptyTodos from './EmptyTodos/EmptyTodos.jsx';
import { useTodos } from './TodoContext/TodoContext.jsx';

function App() {
  const {
    todos,
    loading,
    error,
    filter,
    setFilter,
    toggleTodos,
    deleteTodo,
  } = useTodos();

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch setFilter={setFilter} />

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && filteredTodos.length === 0) && <EmptyTodos />}

        {filteredTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onToggle={() => toggleTodos(index)}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </TodoList>

      <TodoButton />
    </>
  );
}

export default App;
