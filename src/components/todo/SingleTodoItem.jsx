// hooks
import { useState } from 'react';

// library imports
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';

// custom hooks
import useTodoContext from '../../hooks/useTodoContext';

function SingleTodoItem({
  title,
  date,
  id,
  todoItems,
  checked,
  completed,
  listId,
}) {
  const { updateCurrentCheckedItemAndList } = useTodoContext();

  const handleCurrentCheckedItemAndList = () => {
    updateCurrentCheckedItemAndList(id, listId, !checked);
  };

  return (
    <div className="bg-white px-4 border-gray-300">
      <div className="w-full flex justify-between items-center bg-gray-200 rounded-lg border border-gray-300 h-[40px]">
        <Checkbox
          checked={checked}
          onChange={handleCurrentCheckedItemAndList}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <div className="flex w-full items-center pl-2 bg-white h-full">
          <span className="text-md">{title}</span>
        </div>
        <Switch
          checked={completed}
          // onChange={handleSwitchChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
    </div>
  );
}

export default SingleTodoItem;
