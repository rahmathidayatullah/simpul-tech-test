import React from "react";

// components
import Sidebar from "components/Sidebar";
import Content from "components/Content";

const AppLayout = () => {
  return (
    <div className="bg-gray-1 h-screen">
      <div className="flex item-center w-full h-full">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default AppLayout;
