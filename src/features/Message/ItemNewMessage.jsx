import React from "react";

const ItemNewMessage = () => {
  return (
    <li className="mt-5">
      <div className="flex items-center justify-between gap-4">
        <div className="bg-red-1 h-0.5 w-full"></div>
        <p className="whitespace-nowrap font-bold text-base text-red-1">
          New Message
        </p>
        <div className="bg-gray-2 h-0.5 w-full"></div>
      </div>
    </li>
  );
};

export default ItemNewMessage;
