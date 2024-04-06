import React, { useState } from 'react';
import AddToDo from './components/AddToDo';
import Todos from './components/Todos';
import { Class } from '@mui/icons-material';
import { ClassNames } from '@emotion/react';

function App() {
  const [todos, setTodos] = useState([]);

  function saveTodo(todoText) {
    if (todoText === "") {
      return;
    }
    setTodos(prevTodo => {
      return [...prevTodo, todoText];
    });
  }

  function deleteTodo(id) {
    setTodos(prevTodo => {
      return prevTodo.filter((todoItem, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div className='m-auto align-middle bg-cyan-500 max-w-xl p-10 rounded-lg mt-10'>
      <h1 className='align-center text-center font-mono text-3xl text-yellow-300'>To-Do</h1>
      <AddToDo todoSave={saveTodo} />
      {todos.map((todoItem, index) => (
        <Todos
          key={index}
          id={index}
          text={todoItem}
          todoDelete={deleteTodo}
        />
      ))}
    </div>
  );
}

export default App;
