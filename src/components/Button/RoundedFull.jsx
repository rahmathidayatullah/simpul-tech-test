import React from "react";
import clsx from "clsx";

// components
import IconMessage from "components/icon/Message";

const attr = {
  size: "small",
  variant: "blue",
  children: <IconMessage />,
  className: "",
  active: false,
};

const RoundedFull = (props) => {
  const {
    size = attr.size,
    variant = attr.variant,
    children = attr.children,
    className = attr.className,
    active = attr.active,
  } = props;

  const sizes = {
    "w-[60px] h-[60px]": size === "small" || !active,
    "w-[68px] h-[68px]": size === "medium" || active,
  };
  const variants = {
    "bg-[#8785FF]": variant === "purple",
    "bg-[#2F80ED]": variant === "blue",
    "bg-[#F8B76B]": variant === "orange",
    "bg-[#FFFFFF]": variant === "white",
  };

  const classes = clsx(
    "flex items-center justify-center rounded-full",
    className,
    sizes,
    variants
  );

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
};

export default RoundedFull;
