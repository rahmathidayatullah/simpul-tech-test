import React from "react";

// components
import Dots from "components/icon/Dots";

const Menu = ({ children }) => {
  return (
    <details className="dropdown">
      <summary className="btn bg-transparent shadow-none border-none">
        <Dots />
      </summary>
      {children}
    </details>
  );
};

export default Menu;
