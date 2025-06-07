import './App.css';
import TodoSearch from './TodoSearch';
import TodoList  from './assets/TodoLits';
import TodoCounter from './TodoCounter';
import TodoItem from './TodoItem';
import TodoButtom from './TodoButtom';



function App() {

  const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Hacer almuerzo', completed: false },
    { text: 'Lavar platos', completed: false },
    { text: 'Estudiar React', completed: true },
  ];
  return (
    <>

     <TodoCounter completed = {3}   total = {19} />
      <TodoSearch />

      <TodoList>

        {defaultTodos.map((todo, index) => (
          <TodoItem 
            key={index} 
            text={todo.text} 
            completed={todo.completed} 
          />
        ))}                                       
      </TodoList>

      <TodoButtom></TodoButtom>
      
    </>
  );
}

export default App;
