import React from "react";

const TodoFilter = ({ onTodoChange, visible }) => {
  return (
    <label>
      Фильтр по имени
      <input type="text" value={visible} onChange={onTodoChange} />
    </label>
  );
};

export default TodoFilter;
