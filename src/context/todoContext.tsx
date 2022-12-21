import { createContext, ReactNode, useState } from "react";

interface TodoContextProps {
  children: any;
}

interface todo {
  id: string;
  name: string;
  age: number;
}

export interface TodoContextDefault {
  data: todo[];
  addTodo: ({ id, name, age }: todo) => void;
  deleteTodo: (id: string) => void;
  editTodo: ({ id, name, age }: todo) => void;
  searchTodo: (data: string) => void;
}

const todoContextDataDefault = {
  data: [{ id: "928uhds", name: "danh", age: 21 }],
  searchData: [],
  addTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  searchTodo: () => {},
};

export const TodoContext = createContext<any>(todoContextDataDefault);

const TodoContextProvider = ({ children }: TodoContextProps) => {
  const [todos, setTodos] = useState(todoContextDataDefault.data);
  const [searchData, setSearchData] = useState(
    todoContextDataDefault.searchData
  );

  const addTodo = ({ id, name, age }: todo) => {
    setTodos([...todos, { id, name, age }]);
  };
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = ({ id, name, age }: todo) => {
    setTodos(todos.map((todo) => (todo.id === id ? { id, name, age } : todo)));
  };
  const searchTodo = (data: string) => {
    setSearchData(todos.filter((item) => item.name === data) as any);
  };

  const todoContextData = {
    todos,
    addTodo,
    deleteTodo,
    editTodo,
    searchTodo,
    searchData,
  };

  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
