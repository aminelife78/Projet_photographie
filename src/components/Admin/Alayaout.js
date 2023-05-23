import React from "react";
import { Outlet } from "react-router-dom";
import Aheader from "./Aheader.js/Aheader";

const Alayaout = () => {
  return (
    <>
      <div>
        <Aheader />
      </div>

      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Alayaout;
