import React from "react";

// components
import IconSearch from "components/icon/Search";

const HeaderV2 = () => {
  return (
    <div className="h-[58px] bg-gray-2 flex items-center">
      <IconSearch fill="#F2F2F2" height={16} width={16} className="ml-5" />
    </div>
  );
};

export default HeaderV2;
