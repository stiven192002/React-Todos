import"./TodoButtom.css";

const TodoButton = () => {
  return (
    <button
  className="todo-button"
  onClick={() => console.log('Funcionando')}
>
  Create New Todo
</button>
  );
};

export default TodoButton;



