import React from 'react';
import { useDispatch } from 'react-redux';
import PlusIcon from '../../assets/Plus_Sign.svg?react';
import { addProject } from '@/slices/projectsSlice';

const PlusButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProject({ name: 'New Project' })); 
  };

  return (
    <button
      className="p-3 bg-slate-600 rounded-full shadow hover:bg-buttonHover flex items-center justify-center"
      aria-label="Add"
      onClick={handleClick}
    >
      <PlusIcon className="w-6 h-6" />
    </button>
  );
};

export default PlusButton;