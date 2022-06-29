import Counter from './Class/Counter';
import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';
import { Component } from 'react';
import TodoList from './TodoList/TodoList';
import data from './TodoList/todoList.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F52B5' },
];

class App extends Component {
  state = {
    todos: data,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const completedTodo = this.state.todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    const { todos } = this.state;
    return (
      <div>
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <span>Общее количество : {todos.length}</span>
          <span>Количество выполненых : {completedTodo}</span>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
