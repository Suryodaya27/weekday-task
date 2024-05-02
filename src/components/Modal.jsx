import React from "react";

const Modal = ({ id, title, content, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center ">
      <div className="bg-white p-8 rounded shadow-lg">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">{title}</h2>
          <button className="text-gray-600 hover:text-gray-800" onClick={onClose}>Close</button>
        </div>
        <div className="mt-4 w-[300px] h-[400px] lg:w-[1000px] overflow-y-auto">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;
