import './App.css';
import TodoSearch from './TodoSearch';
import TodoList  from './assets/TodoLits';
import TodoCounter from './TodoCounter';
import TodoItem from './TodoItem';
import TodoButtom from './TodoButtom';
import {  useState } from 'react';


 const defaultTodos = [
    { text: 'Cortar cebolla', completed: false },
    { text: 'Hacer almuerzo', completed: false },
    { text: 'Lavar platos', completed: true },
    { text: 'Estudiar React', completed: true },

  ];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [filter, setFilter] = useState("");

 

  const toggleTodos = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  const deleteTodo = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
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

      <TodoButtom />
    </>
  );
}
export default App;