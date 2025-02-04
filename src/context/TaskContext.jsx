import { createContext } from "react";

const TaskContext = createContext({
  todos: [],
  dispatchTodo: ({ type, payload }) => {},
});

export default TaskContext;
