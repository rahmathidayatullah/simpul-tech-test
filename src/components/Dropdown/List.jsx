import React from "react";

const List = ({ children }) => {
  return (
    <ul className="right-0 p-0 menu dropdown-content z-[1] bg-base-100 w-40 rounded-md border border-gray-1">
      {children}
    </ul>
  );
};

export default List;
