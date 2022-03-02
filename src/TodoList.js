import React, { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';

function TodoList() {
  const [todo, setTodo] = useState([]);
  const [todos, setTodos] = useState([]);
  //const date = new Date(todo.date);
  

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, {id: todos.length + 1, desc: todo.desc, date: todo.date }]);
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

    function deleteTodo(id) {
      const removeItem = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(removeItem);
    }


  return (
    <div>
        <h1>Simple Todolist</h1>
        <fieldset>
            <legend>Add todo</legend>
            Description:   <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
             Date:         <input type="date" name="date" value={todo.date} onChange={inputChanged} />
      <button onClick={addTodo}>Add</button>
      </fieldset>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
      
    </div>
  );
};

export default TodoList;

//{date.getDate()}.{date.getMonth() +1 }.{date.getFullYear()}