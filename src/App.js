import classes from "./components/Todo.module.css";
import TodoList from "./components/TodoList";
import "./App.css";



const App = () => {

  return (
    <>
      <h1>My First Project : TODO APP</h1>
      <div className={classes["todo-container"]}>
        <TodoList />
      </div>
    </>
  );
};

export default App;
