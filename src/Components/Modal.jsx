import React, { Children } from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id == "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-color bg-opacity-25 backdrop-blur flex justify-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[600px] flex flex-col  mt-32">
        <button
          className="text-gray-100 text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-divBg p-2 text-gray-100 rounded">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
