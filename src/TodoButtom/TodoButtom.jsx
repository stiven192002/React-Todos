import"./TodoButtom.css";
import { useContext } from "react";
import { TodosContext } from "../TodoContext/TodoContext.jsx";
const TodoButton = () => {
  const { CloseModal } = useContext(TodosContext);
  return (
    <button
  className="todo-button"
  onClick={ CloseModal}
>
  Create New Todo
</button>
  );
};

export default TodoButton;



