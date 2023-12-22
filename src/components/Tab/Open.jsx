import React from "react";
import clsx from "clsx";

// components
import RoundedFull from "components/Button/RoundedFull";
import IconMessage from "components/icon/Message";

const attr = {
  variant: "purple",
  children: <IconMessage height={26} width={26} fill="#ffffff" />,
};

const Open = (props) => {
  const { variant = attr.variant, children = attr.children } = props;

  const classes = clsx("absolute right-0 top-0");

  return (
    <div className="relative h-[68px] w-[80px]">
      <div className="absolute left-0 top-0 rounded-full w-[68px] h-[68px] bg-[#4F4F4F]"></div>
      <div className={classes}>
        <RoundedFull variant={variant}>{children}</RoundedFull>
      </div>
    </div>
  );
};

export default Open;
