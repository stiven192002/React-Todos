import "./TodoItem.css";

const TodoItem = ({ text, completed }) => {
  return (
    <div className="todo-item">
      <span className={`todo-icon ${completed ? "check" : "cross"}`}>
        {completed ? "✔" : "✖"}
      </span>
      <p className={`todo-text ${completed ? "completed" : "incomplete"}`}>
        {text}
      </p>
    </div>
  );
};

export default TodoItem;
