import { createContext, useState } from 'react';

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const [currentCheckedList, setCurrentCheckedList] = useState(null);

  const createList = object => {
    const updatedList = [
      ...todoList,
      {
        ...object,
        id: self.crypto.randomUUID(),
        checked: false,
        selected: false,
        todoItems: [],
      },
    ];

    setTodoList(updatedList);
  };

  const deleteListById = id => {
    const updatedList = todoList.filter(list => list.id !== id);

    setTodoList(updatedList);
  };

  const updateListById = (id, object) => {
    const updatedList = todoList.map(list => {
      if (list.id === id) {
        setCurrentCheckedList({ ...list, ...object });
        return { ...list, ...object };
      }
      return list;
    });
    setTodoList(updatedList);
  };

  const updateCurrentCheckedList = (id, boolean) => {
    const updatedList = todoList.map(list => {
      if (list.id === id) {
        if (list.checked === false) setCurrentCheckedList(list);
        else setCurrentCheckedList(null);
        return { ...list, checked: boolean };
      }
      return { ...list, checked: false };
    });

    setTodoList(updatedList);
  };

  const valueToShare = {
    todoList,
    createList,
    updateListById,
    deleteListById,
    updateCurrentCheckedList,
    currentCheckedList,
  };

  return (
    <TodoContext.Provider value={valueToShare}>{children}</TodoContext.Provider>
  );
}

export default TodoContext;
export { TodoProvider };
