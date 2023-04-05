// hooks
import { useState } from 'react';

// custom hooks
import useTodoContext from '../../hooks/useTodoContext';

// library imports
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';

// components
import ButtonGroupList from './ButtonGroupList';
import SingleTodoItem from './SingleTodoItem';

function SingleTodoList(props) {
  const { currentCheckedList, updateCurrentCheckedList } = useTodoContext();
  const { title, date, id, todoItems, checked, selected } = props;

  const handleCheckboxChange = () => {
    updateCurrentCheckedList(id, !checked);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-gray-300">
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
        <div className="w-full flex justify-between items-center bg-gray-200 rounded-lg border border-gray-300 h-[40px]">
          <Checkbox
            checked={checked}
            onChange={handleCheckboxChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <span className="text-lg">{title}</span>
          <Switch
            checked={selected}
            // onChange={}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
      </div>
      <div
        className={`flex flex-col gap-2 ${todoItems.length ? 'py-4' : ''}`}
      ></div>
      <div className="flex justify-center bg-gray-100 py-2">
        <ButtonGroupList />
      </div>
    </div>
  );
}

export default SingleTodoList;
