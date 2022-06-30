import Counter from './Class/Counter';
import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';
import { Component } from 'react';
import TodoList from './TodoList/TodoList';
import data from './TodoList/todoList.json';
import Form from './Form/Form';
import TodoEditor from 'components/TodoEditor/TodoEditor';
import shortid from 'shortid';
import TodoFilter from './TodoFilter/TodoFilter';

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
    filter: '',
  };

  addTodo = text => {
    if (text === '') return;
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();

    return todos.filter(todo =>
      todo.text.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const completedTodo = this.state.todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    const { todos } = this.state;

    const visibleTodos = this.getVisibleTodos();
    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <span>Общее количество : {todos.length}</span>
          <span>Количество выполненых : {completedTodo}</span>
        </div>
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        <TodoEditor onSubmit={this.addTodo} />
        <TodoFilter
          value={this.state.filter}
          onTodoChange={this.changeFilter}
        />
      </div>
    );
  }
}

export default App;
