import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, task: "Todo Message", completed: false }],
  addTodo: (task) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toggleTodo: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
