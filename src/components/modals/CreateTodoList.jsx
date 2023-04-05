// react imports
import { useState } from 'react';
import ReactDOM from 'react-dom';

// library imports
import { RxCross1 } from 'react-icons/rx';

// custom hooks
import useTodoContext from '../../hooks/useTodoContext';

function CreateTodoList({ onCreateOpen }) {
  const { createList } = useTodoContext();
  const [values, setValues] = useState({ title: '', dueDate: '' });

  const handleToggle = () => {
    onCreateOpen();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    const updatedValues = { ...values, [name]: value };
    setValues(updatedValues);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!values.title || !values.dueDate) return;
    else {
      createList(values);
      onCreateOpen();
    }
  };

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={handleToggle}
        className="absolute inset-0 bg-gray-300 opacity-50 z-10"
      ></div>
      <div className="absolute top-20 left-0 flex flex-col items-center w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col max-w-[40%] w-full bg-white rounded-lg overflow-hidden border border-gray-300 z-20"
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-300">
            <h1 className="text-xl font-[500]">New Todo List</h1>
            <RxCross1
              onClick={handleToggle}
              className="text-lg text-gray-600 cursor-pointer"
            />
          </div>
          <div className="flex flex-col px-4 pt-4 pb-10 border-b border-gray-300">
            <span className="text-lg mb-2">Title</span>
            <input
              value={values.title}
              onChange={handleChange}
              name="title"
              type="text"
              className="border border-gray-300 h-[40px] rounded-lg outline-2 outline-gray-300 pl-2 mb-4"
            />
            <span className="text-lg mb-2">Due Date</span>
            <input
              value={values.dueDate}
              onChange={handleChange}
              name="dueDate"
              type="text"
              placeholder="Select Due Date"
              className="border border-gray-300 h-[40px] rounded-lg outline-2 outline-gray-300 flex items-center pl-2"
            />
            <button
              type="submit"
              className="bg-yellow-400 py-3 text-xl font-[500] rounded-lg mt-4 hover:bg-yellow-500 ease-in duration-100"
            >
              Create
            </button>
          </div>
          <div className="p-4 flex justify-end">
            <button
              onClick={handleToggle}
              className="py-2 px-3 bg-teal-500 rounded-lg text-white hover:bg-teal-600 ease-in duration-100"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default CreateTodoList;
