// hooks
import { useState } from 'react';

// library imports
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';

function SingleTodoItem() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  const handleSwitchChange = () => {
    setSwitchChecked(!switchChecked);
  };

  return (
    <div className="bg-white px-4 border-gray-300">
      <div className="w-full flex justify-between items-center bg-gray-200 rounded-lg border border-gray-300 h-[40px]">
        <Checkbox
          checked={checkboxChecked}
          onChange={handleCheckboxChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <div className="flex w-full items-center pl-2 bg-white h-full">
          <span className="text-md">Clothes</span>
        </div>
        <Switch
          checked={switchChecked}
          onChange={handleSwitchChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
    </div>
  );
}

export default SingleTodoItem;
