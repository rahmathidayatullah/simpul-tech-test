import React, { useContext } from "react";

// component
import UserIcons from "components/UserIcon";

// context
import { Context } from "context/GlobalContext";

const Item = ({ message, index }) => {
  const { handleDetailMessage } = useContext(Context);

  return (
    <li
      className={`py-[22px] border-gray-3 ${
        index === 0 ? "" : "border-t-[1px]"
      }`}
    >
      <div
        onClick={() => handleDetailMessage(message.id)}
        className="flex flex-wrap gap-2 items-start"
      >
        <UserIcons />
        <div>
          <div className="flex gap-14 items-start">
            <p className="font-bold text-blue-1 text-base max-w-[26rem] break-all">
              {message.title}
            </p>
            <p>{message.date}</p>
          </div>
          <p className="font-bold">{message.name ? `${message.name} :` : ""}</p>
          <p className="truncate max-w-[32.2rem]">{message.description}</p>
        </div>
      </div>
    </li>
  );
};

export default Item;
