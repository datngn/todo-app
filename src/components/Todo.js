import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export default function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id}>{todo.text}</div>

      <div className="icon">
        <AiOutlineCheckCircle className="complete-icon" onClick={() => completeTodo(todo.id)} />
        <TiEdit className="edit-icon" onClick={() => setEdit({ id: todo.id, value: todo.text })} />
        <RiCloseCircleLine className="del-icon" onClick={() => removeTodo(todo.id)} />
      </div>
    </div>
  ));
}
