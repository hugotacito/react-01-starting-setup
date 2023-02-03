import { FormEvent, useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const context = useContext(TodosContext);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    context.addTodo(enteredText);
  };
  
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="todo">Todo Text</label>
      <input type="text" name="todo" ref={todoTextInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};
export default NewTodo;
