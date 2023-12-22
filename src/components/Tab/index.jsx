import React from "react";
import clsx from "clsx";

// components
import RoundedFull from "components/Button/RoundedFull";
import IconMessage from "components/icon/Message";

const attr = {
  variant: "purple",
  children: <IconMessage height={26} width={26} fill="#ffffff" />,
  active: false,
  className: "",
};

const Open = (props) => {
  const {
    variant = attr.variant,
    children = attr.children,
    active = attr.active,
    className = attr.className,
  } = props;

  const actives = {
    "w-[80px]": active === true,
    "w-[68px]": active === false,
  };

  const classesActive = clsx("relative h-[68px]", actives, className);
  const classes = clsx("absolute right-0 top-0");

  return (
    <div className={classesActive}>
      {active ? (
        <div className="absolute left-0 top-0 rounded-full w-[68px] h-[68px] bg-[#4F4F4F]"></div>
      ) : (
        ""
      )}
      <div className={classes}>
        <RoundedFull variant={variant} onClick={props.onClick} active={active}>
          {children}
        </RoundedFull>
      </div>
    </div>
  );
};

export default Open;
