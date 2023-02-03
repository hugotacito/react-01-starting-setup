import React, { ReactNode, useState } from "react";
import Todo from "../models/Todo";

type TodosContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextType>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider = (props: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prev) => prev.concat(new Todo(text)));
  };

  const removeTodo = (id: string) => {
    setTodos((prev) =>
      prev.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const contextValue: TodosContextType = {
    items: todos,
    addTodo: addTodo,
    removeTodo: removeTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
