import React from "react";

// component
import DropdownMenu from "components/Dropdown/Menu";
import DropdownList from "components/Dropdown/List";

const Item = () => {
  // kiri
  return (
    <li>
      <div className="flex flex-col items-start">
        <p className="text-right text-[#E5A443] font-bold">You</p>
        <div className="flex gap-3 items-start mt-2">
          <div className="bg-[#FCEED3] rounded-[5px] p-[10px]">
            <p className="text-gray">
              No worries. It will be completed ASAP. I’ve asked him yesterday.
            </p>
            <p className="font-xs">19:32</p>
          </div>
          <div className="p-[10px]">
            <DropdownMenu>
              <DropdownList>
                <li className="text-blue-1 border-b border-gray-1 py-2 px-4 text-base">
                  Edit
                </li>
                <li className="text-red-1 py-2 px-4 text-base">Delete</li>
              </DropdownList>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </li>
  );
  // kanan
  return (
    <li>
      <div className="flex flex-col items-start">
        <p className="text-right text-[#E5A443] font-bold">You</p>
        <div className="flex gap-3 items-start mt-2">
          <div className="bg-[#FCEED3] rounded-[5px] p-[10px]">
            <p className="text-gray">
              No worries. It will be completed ASAP. I’ve asked him yesterday.
            </p>
            <p className="font-xs">19:32</p>
          </div>
          <div className="p-[10px]">
            <DropdownMenu>
              <DropdownList>
                <li className="text-blue-1 border-b border-gray-1 py-2 px-4 text-base">
                  Edit
                </li>
                <li className="text-red-1 py-2 px-4 text-base">Delete</li>
              </DropdownList>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Item;
