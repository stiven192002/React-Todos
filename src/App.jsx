import React from 'react';
import './App.css';
import TodoSearch from './TodoSearch/TodoSearch';
import TodoCounter from './TodoCounter/TodoCounter';
 import TodoList from './TodoLits/TodoLits';
import TodoItem from './TodoItem/TodoItem';
import TodoButton from './TodoButtom/TodoButtom';
import { useEffect } from 'react';
import {  useState } from 'react';
import TodosLoading from './TodosLoading/TodosLoading';
import TodosError from './TodosError/TodosError';
import EmptyTodos from './EmptyTodos/EmptyTodos';



 const defaultTodos = [
    { text: 'Cortar cebolla', completed: false },
    { text: 'Hacer almuerzo', completed: false },
    { text: 'Lavar platos', completed: true },
    { text: 'Estudiar React', completed: true },

  ];
 


function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    setTimeout(() => {
       try {
      const localStorageItem = localStorage.getItem(itemName);

      let parsedItem;
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }

      setItem(parsedItem);     
      setLoading(false);       
    } catch (e) {
      setError(true);          
      setLoading(false);       
    }
    }, 3000);
   
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}


 

function App() {

  const {item:todos, 
    saveItem:saveTodos,
    loading,
    error   } = useLocalStorage("TODOS_V1", [] );
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
       {loading && <TodosLoading/>}

        {error && <TodosError/>}
        {filteredTodos.length === 0 && <EmptyTodos/> }

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