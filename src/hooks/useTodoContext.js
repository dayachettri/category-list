// hooks
import { useContext } from 'react';

// context
import TodoContext from '../context/todo/TodoContext';

const useTodoContext = () => {
  return useContext(TodoContext);
};

export default useTodoContext;
