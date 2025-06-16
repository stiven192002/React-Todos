import "./TodoSearch.css";



const TodoSearch = ({ setFilter }) => {
  const onSearchValueChange = (event) => {
      console.log(`Buscaste: ${event.target.value}`);
    setFilter(event.target.value);
  };

  return (
    <input
      className="todo-search"
      type="text"
      placeholder="Buscar..."
      onChange={onSearchValueChange}
    />
  );
};

export default TodoSearch;