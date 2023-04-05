// icons
import { CgAddR } from 'react-icons/cg';
import { BiEdit } from 'react-icons/bi';
import { TbSquareMinus } from 'react-icons/tb';

function ButtonGroupList({ onCreateOpen, onUpdateOpen }) {
  return (
    <div>
      <div className="flex text-white text-2xl">
        <button
          onClick={onCreateOpen}
          className="px-3 py-2 bg-green-400 rounded-l-lg hover:bg-green-500 ease-in duration-100"
        >
          <CgAddR />
        </button>
        <button
          onClick={onUpdateOpen}
          className="px-3 py-2 bg-yellow-400 hover:bg-yellow-500 ease-in duration-100"
        >
          <BiEdit o />
        </button>
        <button className="px-3 py-2 bg-red-400 rounded-r-lg hover:bg-red-500 ease-in duration-100">
          <TbSquareMinus />
        </button>
      </div>
    </div>
  );
}

export default ButtonGroupList;
