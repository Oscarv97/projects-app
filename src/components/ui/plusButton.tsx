import React from 'react';
import PlusIcon from '../../assets/Plus_Sign.svg?react';

const PlusButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      className=" p-3 bg-slate-600 rounded-full shadow hover:bg-buttonHover flex items-center justify-center"
      aria-label="Add"
      onClick={onClick}
    >
      <PlusIcon className="w-6 h-6" />
    </button>
  );
};

export default PlusButton;
