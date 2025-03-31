import React from 'react';
import ThunkableBeaver from '../../assets/ThunkableBeaver.png'; 
import PlusButton from '../ui/plusButton';

const Header: React.FC = () => {
  return (
    <header className="w-full fixed top-0 p-4 shadow-md">
      <div className="container mx-auto ">
    
        <div className="absolute top-4 left-8">
          <img src={ThunkableBeaver} alt="Logo" className="w-10 h-10" />
        </div>
    
        <div className="mt-16 ml-4">
          <h1 className="text-xl font-bold">My Projects</h1>
        </div>
        
        <div className="absolute bottom-2 right-2">
          <button className="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-blue-100">
            Action
          </button>
          <button className="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-blue-100">

            Edit
          </button>
          <PlusButton onClick={() => console.log('clicked')}/>
        </div>
      </div>
    </header>
  );
};

export default Header;