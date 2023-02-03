import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos = () => {
  const context = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {context.items.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} id={todo.id} />
      ))}
    </ul>
  );
};

export default Todos;
