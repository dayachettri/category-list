import { createContext, useState } from 'react';

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);

  const valueToShare = { todoList };

  return (
    <TodoContext.Provider value={valueToShare}>{children}</TodoContext.Provider>
  );
}

export default TodoContext;
export { TodoProvider };
