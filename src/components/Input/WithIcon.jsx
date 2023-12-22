import React from "react";

// components
import IconSearch from "components/icon/Search";

const WithIcon = () => {
  return (
    <div className="relative w-full h-8 px-[22px]">
      <IconSearch
        fill="#333333"
        className="absolute top-1/2 right-16 -translate-x-1/2 -translate-y-1/2"
      />
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-full h-full pl-16 border-gray-3 placeholder-gray-1"
      />
    </div>
  );
};

export default WithIcon;
