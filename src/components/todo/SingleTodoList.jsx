// hooks
import { useState } from 'react';

// library imports
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';

// components
import ButtonGroup from './ButtonGroup';

function SingleTodoList() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  const handleSwitchChange = () => {
    setSwitchChecked(!switchChecked);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-gray-300">
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
        <div className="w-full flex justify-between items-center bg-gray-200 rounded-lg border border-gray-300">
          <Checkbox
            checked={checkboxChecked}
            onChange={handleCheckboxChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <span className="text-lg">Clothes</span>
          <Switch
            checked={switchChecked}
            onChange={handleSwitchChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
      </div>
      <div></div>
      <div className="flex justify-center bg-gray-100 py-2">
        <ButtonGroup />
      </div>
    </div>
  );
}

export default SingleTodoList;
