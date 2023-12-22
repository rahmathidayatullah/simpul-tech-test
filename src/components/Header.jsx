import React, { useContext } from "react";

// components
import Search from "components/Input/WithIcon";
import IconArrow from "components/icon/Arrow";
import Button from "components/Button";
import IconArrowBig from "components/icon/ArrowBig";
import IconClose from "components/icon/Close";

// context
import { Context } from "context/GlobalContext";

const Header = () => {
  const { activeTab, handleClose } = useContext(Context);

  return (
    <header>
      {activeTab.messages ? <Search /> : ""}
      {activeTab.task ? (
        <div className="flex justify-between items-center px-[22px]">
          <div className="relative w-max">
            <IconArrow className="absolute z-10 right-4 top-1/2 -translate-y-1/2" />

            <details className="dropdown ml-20">
              <summary className="m-1 btn pr-8 bg-white border-gray-1">
                My Task
              </summary>
              <ul className="left-1/2 transform -translate-x-1/2 p-0 menu dropdown-content z-[1] bg-base-100 w-64 rounded-md border border-gray-1">
                <li className="border-b border-gray-1 py-2 px-4 text-base cursor-pointer text-gray-2">
                  Personal Errands
                </li>
                <li className="border-b border-gray-1 py-2 px-4 text-base cursor-pointer text-gray-2">
                  Urgent To-Do
                </li>
              </ul>
            </details>
          </div>
          <Button>New Task</Button>
        </div>
      ) : (
        ""
      )}
      {activeTab.detailMessage ? (
        <div className="flex justify-between items-center border-b-[1px] pb-5 border-gray-1 px-[22px]">
          <div className="flex items-center gap-4">
            <button type="button" onClick={handleClose}>
              <IconArrowBig />
            </button>
            <div>
              <p className="font-bold text-blue-1 text-base break-all">
                I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
              </p>
              <p className="text-gray-1 text-xs">3 Participants</p>
            </div>
          </div>
          <button type="button" onClick={handleClose}>
            <IconClose />
          </button>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
