import "./TodoItem.css";

const TodoItem = ({ text, completed, onToggle, onDelete }) => {
  return (
    <div className="todo-item">
      <button
        className={`todo-check ${completed ? "checked" : ""}`}
        onClick={onToggle}
      >
        ✔
      </button>

      <p className={`todo-text ${completed ? "completed" : "incomplete"}`}>
        {text}
      </p>

      <button className="todo-delete" onClick={onDelete}>
        ✖
      </button>
    </div>
  );
};

export default TodoItem;
