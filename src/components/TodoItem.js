import { useContext } from "react";
import classes from './Todo.module.css';
import TaskContext from '../context/TaskContext'


const TodoItem = ({ todo }) => {
  const { dispatchTodo } = useContext(TaskContext);
  const completeTodo = todo.complete;
  console.log(completeTodo)
  return (
    <li>
      <div>
        <h2 className={`${completeTodo && classes.complete}`}>{todo.title}</h2>
      </div>
      <button onClick={() => dispatchTodo({ type: 'COMPLETE', payload: { id: todo.id } })}>Complete</button>
      <button onClick={() => dispatchTodo({ type: 'DELETE', payload: { id: todo.id } })}>Delete</button>
    </li >

  );
};

export default TodoItem;







