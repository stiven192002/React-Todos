import './App.css';
import TodoSearch from './TodoSearch';
import TodoList  from './assets/TodoLits';
import TodoCounter from './TodoCounter';
import TodoItem from './TodoItem';
import TodoButtom from './TodoButtom';



function App() {
  return (
    <>

     <TodoCounter completed = {3}   total = {19} />
      <TodoSearch />
     


      <TodoList>

       <TodoItem />
      </TodoList>

      <TodoButtom></TodoButtom>
      
    </>
  );
}

export default App;
