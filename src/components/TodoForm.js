import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

const TodoForm = () => {
  const { dispatchTodo } = useContext(TaskContext);
  const [newTodo, setNewTodo] = useState("");

  const changeTodoHandler = (event) => {
    setNewTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!newTodo.trim()) {
      alert("Task cannot be empty! Please enter a valid task.");
      return;
    }

    dispatchTodo({ type: "ADD", payload: { name: newTodo } });
    setNewTodo("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={changeTodoHandler}
          placeholder="ADD NEW TASKS..."
        />
        <button type="submit">ADD</button>
      </div>
    </form>
  );
};

export default TodoForm;
