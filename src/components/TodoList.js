import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import TaskContext from '../context/TaskContext'
import { useEffect, useReducer, useState } from "react";


const todoReducer = (todos, action) => {
  if (action.type === "ADD") {
    return [...todos, newTodo(action.payload.name)];
  }

  if (action.type === "COMPLETE") {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
  }

  if (action.type === "DELETE") {
    return todos.filter((todo) => todo.id !== action.payload.id);
  }

  return todos;
};

const newTodo = (name) => {
  return { title: name, id: Date.now(), complete: false };
};

const TodoList = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, []);

  return (
    <TaskContext.Provider value={{ dispatchTodo }}>
      <TodoForm />
      <ul>
        {todos.map((todo) => (<TodoItem key={todo.id} title={todo.title} todo={todo} />))
        }
      </ul>
    </TaskContext.Provider>
  );
};

export default TodoList;
