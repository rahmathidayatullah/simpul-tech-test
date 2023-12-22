import React, { useContext } from "react";

// components
import DropdownMenu from "components/Dropdown/Menu";
import DropdownList from "components/Dropdown/List";
import IconDots from "components/icon/Dots";

// hooks
import useMessage from "hooks/useMessage";

// context
import { Context } from "context/GlobalContext";

const List = () => {
  const { activeTab } = useContext(Context);

  const [message, loading] = useMessage(activeTab.idMessage);

  return (
    <ul className="h-[80%] overflow-auto pt-[0.5rem] mb-[1rem]">
      <li className="mt-3">
        <div className="flex flex-col items-end">
          <p className="text-right text-[#9B51E0] font-bold">You</p>
          <div className="flex gap-3 items-start mt-2">
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
            <div className="bg-[#EEDCFF] rounded-[5px] p-[10px]">
              <p className="text-gray">
                No worries. It will be completed ASAP. I’ve asked him yesterday.
              </p>
              <p className="font-xs">19:32</p>
            </div>
          </div>
        </div>
      </li>
      {/* date */}
      <li className="mt-5">
        <div className="flex items-center justify-between gap-4">
          <div className="bg-gray-2 h-0.5 w-full"></div>
          <p className="whitespace-nowrap font-bold text-base">
            Today June 09, 2021
          </p>
          <div className="bg-gray-2 h-0.5 w-full"></div>
        </div>
      </li>
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
      <li>
        <div className="flex flex-col items-end">
          <p className="text-right text-[#9B51E0] font-bold">You</p>
          <div className="flex gap-3 items-start mt-2">
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
            <div className="bg-[#EEDCFF] rounded-[5px] p-[10px]">
              <p className="text-gray">
                No worries. It will be completed ASAP. I’ve asked him yesterday.
              </p>
              <p className="font-xs">19:32</p>
            </div>
          </div>
        </div>
      </li>
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
      {/* new message */}
      <li className="mt-5">
        <div className="flex items-center justify-between gap-4">
          <div className="bg-red-1 h-0.5 w-full"></div>
          <p className="whitespace-nowrap font-bold text-base text-red-1">
            New Message
          </p>
          <div className="bg-gray-2 h-0.5 w-full"></div>
        </div>
      </li>
      <li className="mt-5">
        <div className="flex flex-col items-start">
          <p className="text-right text-[#43B78D] font-bold">You</p>
          <div className="flex gap-3 items-start mt-2">
            <div className="bg-[#D2F2EA] rounded-[5px] p-[10px]">
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
    </ul>
  );
};

export default List;
