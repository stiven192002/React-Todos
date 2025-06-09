import "./TodoCounter.css";

 
const TodoCounter = ({ total, completed }) => {

  return (
    <h1 className="todo-counter">
      Has completado {completed} de {total} Todos
    </h1>
  );
}

export default TodoCounter;