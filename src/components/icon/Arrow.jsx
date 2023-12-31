import React from "react";

const attr = {
  className: "",
};

const Arrow = ({ className = attr.className }) => {
  return (
    <svg
      className={className}
      width={11}
      height={8}
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.59795 0.912477L5.77295 4.72914L1.94795 0.912476L0.772949 2.08748L5.77295 7.08748L10.7729 2.08748L9.59795 0.912477Z"
        fill="#4F4F4F"
      />
    </svg>
  );
};

export default Arrow;
