import React from "react";
import clsx from "clsx";

const attr = {
  children: "Button",
  className: "",
};

const Button = (props) => {
  const { children = attr.children, className = attr.className } = props;

  const classes = clsx(
    "btn btn-primary bg-[#2F80ED] text-white py-2 px-4",
    className
  );

  return (
    <button type="button" className={classes} {...props}>
      {/* <button type="button" className={classes}> */}
      {children}
    </button>
  );
};

export default Button;
