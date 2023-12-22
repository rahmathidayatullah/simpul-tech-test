import React from "react";

// component
import IconArrow from "components/icon/Arrow";
import IconEdit from "components/icon/Edit";
import IconSchedule from "components/icon/Schedule";
import DropdownMenu from "components/Dropdown/Menu";
import DropdownList from "components/Dropdown/List";

const Item = ({ task, index, handleActiveBox, handleCollabse }) => {
  function changeCheck(e, id) {
    const { checked } = e.target;
    handleActiveBox({ checked, id });
  }

  return (
    <li
      key={task.id}
      className={`py-[22px] border-gray-3 ${
        index === 0 ? "" : "border-t-[1px]"
      }`}
    >
      <div className="flex gap-4 items-start">
        <div className="relative top-[0.7rem]">
          <input
            type="checkbox"
            className="checkbox"
            checked={task.checkbox}
            onChange={(e) => changeCheck(e, task.id)}
          />
        </div>
        <div className="w-full">
          <ul>
            <li className="flex items-center justify-between">
              <p
                className={`font-bold text-gray-2 ${
                  task.checkbox ? "line-through" : ""
                }`}
              >
                {task.title}
              </p>
              <div className="flex items-center gap-4">
                <p className="text-red-1">{task.day}</p>
                <p>{task.date1}</p>
                <button type="button" onClick={() => handleCollabse(task.id)}>
                  <IconArrow
                    className={
                      task.isCollabse
                        ? "transform rotate-0"
                        : "transform rotate-180"
                    }
                  />
                </button>

                <DropdownMenu>
                  <DropdownList>
                    <li className="text-red-1 py-2 px-4 text-base">Delete</li>
                  </DropdownList>
                </DropdownMenu>
              </div>
            </li>
            {!task.isCollabse ? (
              ""
            ) : (
              <li className="mt-4">
                <div className="flex gap-4 items-center">
                  <IconSchedule />
                  <input
                    type="date"
                    className="border-[1px] border-gray-1 rounded-md px-4 py-2"
                  />
                </div>
              </li>
            )}

            {!task.isCollabse ? (
              ""
            ) : (
              <li className="mt-4">
                <div className="flex gap-4 items-start">
                  <IconEdit className="relative top-[5px]" />
                  <p>{task.description}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Item;
