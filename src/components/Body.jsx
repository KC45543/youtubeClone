import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import SidebarIcons from "./SidebarIcons";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { Outlet } from "react-router-dom";

import Header from "./Header";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        {isMenuOpen ? <Sidebar /> : <SidebarIcons />}
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
