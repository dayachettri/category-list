// hooks
import { useState } from 'react';

// custom hooks
import useTodoContext from '../../hooks/useTodoContext';

// library imports
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import { toast } from 'react-toastify';

// components
import ButtonGroupList from './ButtonGroupList';
import SingleTodoItem from './SingleTodoItem';
import CreateTodoItem from '../modals/CreateTodoItem';
import UpdateTodoItem from '../modals/UpdateTodoItem';

function SingleTodoList(props) {
  const {
    updateCurrentCheckedList,
    currentCheckedItem,
    currentCheckedItemList,
  } = useTodoContext();
  const { title, date, id, todoItems, checked, completed } = props;
  const [createTodoItemOpen, setCreateTodoItemOpen] = useState(false);
  const [updateTodoItemOpen, setUpdateTodoItemOpen] = useState(false);

  const handleCreateTodoItemOpen = () => {
    setCreateTodoItemOpen(!createTodoItemOpen);
  };

  const handleUpdateTodoItemOpen = () => {
    if (!currentCheckedItem) {
      toast.error('No item checked', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
      return;
    }
    setUpdateTodoItemOpen(!updateTodoItemOpen);
  };

  const handleCheckboxChange = () => {
    updateCurrentCheckedList(id, !checked);
  };

  const renderedTodoItems = todoItems.map(item => (
    <SingleTodoItem key={item.id} listId={id} {...item} />
  ));

  return (
    <div className="rounded-lg overflow-hidden border border-gray-300 h-[fit-content]">
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
        <div className="w-full flex justify-between items-center bg-gray-200 rounded-lg border border-gray-300 h-[40px]">
          <Checkbox
            checked={checked}
            onChange={handleCheckboxChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <span className="text-lg">{title}</span>
          <Switch
            checked={completed}
            // onChange={}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
      </div>
      <div className={`flex flex-col gap-2 ${todoItems.length ? 'py-4' : ''}`}>
        {renderedTodoItems}
      </div>
      <div className="flex justify-center bg-gray-100 py-2">
        <ButtonGroupList
          onCreateOpen={handleCreateTodoItemOpen}
          onUpdateOpen={handleUpdateTodoItemOpen}
        />
      </div>
      {createTodoItemOpen && (
        <CreateTodoItem listId={id} onCreateOpen={handleCreateTodoItemOpen} />
      )}
      {updateTodoItemOpen && (
        <UpdateTodoItem onUpdateOpen={handleUpdateTodoItemOpen} />
      )}
    </div>
  );
}

export default SingleTodoList;
