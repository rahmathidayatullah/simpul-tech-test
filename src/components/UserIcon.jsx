import React from "react";

// components
import IconUser from "components/icon/User";

const UserIcon = () => {
  return (
    <div className="relative w-[51px] h-[34px]">
      <div className="absolute top-0 left-0 w-[34px] h-[34px] rounded-full bg-[#E0E0E0] flex items-center justify-center">
        <IconUser fill="#4F4F4F" height={12} width={12} />
      </div>
      <div className="absolute top-0 right-0 w-[34px] h-[34px] rounded-full bg-[#2F80ED] flex items-center justify-center">
        <IconUser fill="#FFFFFF" height={12} width={12} />
      </div>
    </div>
  );
};

export default UserIcon;
