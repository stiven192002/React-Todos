import "./TodoCounter.css";

const TodoCounter = ({ total, completed }) => {
  return (
    <h1 className="todo-counter">
      {total === 0
        ? "¡Lo lograste!"
        : `Has completado ${completed} de ${total} Todos`}
    </h1>
  );
};

export default TodoCounter;
