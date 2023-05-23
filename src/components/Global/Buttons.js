import React from "react";
const Buttons = ({ handleBtn, idx, children,color }) => {
  return (
    <>
      <button
        className={`${color}`}
        type="submit"
        onClick={() => handleBtn(idx)}
      >
        {children}
      </button>
    </>
  );
};

export default Buttons;