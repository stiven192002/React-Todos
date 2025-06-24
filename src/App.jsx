import React from 'react';
import './App.css';
import TodoSearch from './TodoSearch/TodoSearch';
import TodoCounter from './TodoCounter/TodoCounter';

 import TodoList from './TodoLits/TodoLits';

import TodoItem from './TodoItem/TodoItem';
import TodoButton from './TodoButtom/TodoButtom';

import {  use, useState } from 'react';


 const defaultTodos = [
    { text: 'Cortar cebolla', completed: false },
    { text: 'Hacer almuerzo', completed: false },
    { text: 'Lavar platos', completed: true },
    { text: 'Estudiar React', completed: true },

  ];
 

function useLocalStorage( itemName , initialValue) {


  const localStorageItem = localStorage.getItem(itemName);

let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

const [item, setItem] = useState(parsedItem);

const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
   setItem(newItem);
  }
  return [item, saveItem];
}
  

 

function App() {

 
   

  
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", [] );
  const [filter, setFilter] = useState("");

 
 
  
  const toggleTodos = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  saveTodos(newTodos);
};

  
  
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );

  const completedTodos = todos.filter(todos => !!todos.completed).length;
  const totalTodos = todos.length;
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch setFilter={setFilter} />

      <TodoList>
        {filteredTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onToggle ={() => {  toggleTodos(index); }}
            onDelete={() => { deleteTodo(index); }}
          />
        ))}
      </TodoList>

      <TodoButton />
    </>
  );
}
export default App;