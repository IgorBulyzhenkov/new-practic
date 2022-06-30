import './TodoList.css';

export default function TodoList({ todos, onDeleteTodo, onToggleCompleted }) {
  return (
    <div className="TodoList">
      <h2>Практика с классами</h2>
      <ul className="TodoList__list">
        {todos.map(({ id, text, completed }) => {
          return (
            <li key={id} className="TodoList__item">
              <input
                type="checkbox"
                className="TodoList__checkbox"
                checked={completed}
                onChange={() => onToggleCompleted(id)}
              ></input>
              <p className="TodoList__title">{text}</p>
              <button
                type="button"
                className="TodoList__button"
                onClick={() => onDeleteTodo(id)}
              >
                Удалить
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
