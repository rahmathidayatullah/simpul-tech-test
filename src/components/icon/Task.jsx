import React from "react";

const attr = {
  height: 26,
  width: 20,
  fill: "#F8B76B",
  className: "",
};

const Task = ({
  height = attr.height,
  width = attr.width,
  fill = attr.fill,
  className = attr.className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 26 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.11117 0.666656H23.1112C24.3334 0.666656 25.3334 1.66666 25.3334 2.88888V17.3333C25.3334 18.5555 24.3334 19.5555 23.1112 19.5555H3.11117C1.88895 19.5555 0.888947 18.5555 0.888947 17.3333V2.88888C0.888947 1.66666 1.88895 0.666656 3.11117 0.666656ZM3.11117 2.88888V17.3333H12.0001V2.88888H3.11117ZM23.1112 17.3333H14.2223V2.88888H23.1112V17.3333ZM22.0001 6.77777H15.3334V8.44443H22.0001V6.77777ZM15.3334 9.55555H22.0001V11.2222H15.3334V9.55555ZM22.0001 12.3333H15.3334V14H22.0001V12.3333Z"
        fill={fill}
      />
    </svg>
  );
};

export default Task;
