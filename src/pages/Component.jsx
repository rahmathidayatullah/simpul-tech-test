import React, { useState } from "react";
import Search from "components/Input/WithIcon";
import WrapperLoading from "components/WrapperLoading";
import TabClose from "components/Button/RoundedFull";
import IconMessage from "components/icon/Message";
// import TabOpen from "components/Tab/Open";
import TabOpenV2 from "components/Tab";
import Button from "components/Button";
import UserIcons from "components/UserIcon";
import Dots from "components/icon/Dots";

const PageComponent = () => {
  const [activeTab, setActiveTab] = useState(false);

  function handleSetActiveTab() {
    setActiveTab(!activeTab);
  }

  return (
    <div className="p-10 ">
      {/* <TabOpen variant="purple">
        <IconMessage height={26} width={26} fill="#ffffff" />,
      </TabOpen> */}
      <p>active</p>
      <TabOpenV2
        active={activeTab}
        // variant="purple"
        variant={activeTab ? "purple" : "white"}
        onClick={() => handleSetActiveTab()}
      >
        <IconMessage
          height={26}
          width={26}
          //   fill={activeTab ? "#8785FF" : "#ffffff"}
          fill={activeTab ? "#ffffff" : "#8785FF"}
        />
      </TabOpenV2>
      <p>nonactive</p>
      <TabOpenV2 active={false} variant="purple">
        <IconMessage height={26} width={26} fill="#ffffff" />,
      </TabOpenV2>
      {/* <TabOpen variant="blue">
        <IconMessage height={26} width={26} fill="#ffffff" />,
      </TabOpen> */}
      <Button>New Task</Button>
      <Button>Submit</Button>
      <TabClose variant="purple" size="medium">
        <IconMessage height={26} width={26} fill="#ffffff" />
      </TabClose>
      <Search />
      <WrapperLoading />
      <TabClose variant="purple" size="medium">
        <IconMessage height={26} width={26} fill="#ffffff" />
      </TabClose>
      <TabClose variant="white" size="small">
        <IconMessage height={25} width={25} fill="#8785FF" />
      </TabClose>
      <TabClose variant="purple" size="small">
        <IconMessage />
      </TabClose>
      <TabClose variant="orange" size="medium">
        <IconMessage />
      </TabClose>

      <div>
        <UserIcons />
      </div>
      {/* list 1 */}
      <div>
        <ul>
          <li className="py-[22px] border-t-2 border-gray-3">
            <div className="flex flex-wrap gap-2 items-start">
              <UserIcons />
              <div>
                <div className="flex gap-4 items-start">
                  <p className="font-bold text-blue-1 text-base max-w-[20rem] break-all">
                    Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow
                    Up - Brief Service ]
                  </p>
                  <p>January 1,2021 19:10</p>
                </div>
                <p className="font-bold">Cameron Phillips :</p>
                <p className="truncate max-w-[32.2rem]">
                  I understand your initial concerns and thats very valid,
                  Elizabeth. But you bla bla bla ...
                </p>
              </div>
            </div>
          </li>
          <li className="py-[22px] border-t-2 border-gray-3">
            <div className="flex flex-wrap gap-2 items-start">
              <UserIcons />
              <div>
                <div className="flex gap-4 items-start">
                  <p className="font-bold text-blue-1 text-base max-w-[20rem] break-all">
                    Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow
                    Up - Brief Service ]
                  </p>
                  <p>January 1,2021 19:10</p>
                </div>
                <p className="font-bold">Cameron Phillips :</p>
                <p className="truncate max-w-[32.2rem]">
                  I understand your initial concerns and thats very valid,
                  Elizabeth. But you bla bla bla ...
                </p>
              </div>
            </div>
          </li>
          <li className="py-[22px] border-t-2 border-gray-3">
            <div className="flex flex-wrap gap-2 items-start">
              <UserIcons />
              <div>
                <div className="flex gap-4 items-start">
                  <p className="font-bold text-blue-1 text-base max-w-[20rem] break-all">
                    Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow
                    Up - Brief Service ]
                  </p>
                  <p>January 1,2021 19:10</p>
                </div>
                <p className="font-bold">Cameron Phillips :</p>
                <p className="truncate max-w-[32.2rem]">
                  I understand your initial concerns and thats very valid,
                  Elizabeth. But you bla bla bla ...
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* list 2 */}
      <div>
        <ul>
          <li>
            <div className="flex flex-col items-end">
              <p className="text-right text-[#9B51E0] font-bold">You</p>
              <div className="flex gap-3 items-start mt-2">
                <div className="p-[10px]">
                  <Dots />
                </div>
                <div className="bg-[#EEDCFF] rounded-[5px] p-[10px]">
                  <p className="text-gray">
                    No worries. It will be completed ASAP. I’ve asked him
                    yesterday.
                  </p>
                  <p className="font-xs">19:32</p>
                </div>
              </div>
            </div>
          </li>
          {/* start */}
          <li>
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
                    No worries. It will be completed ASAP. I’ve asked him
                    yesterday.
                  </p>
                  <p className="font-xs">19:32</p>
                </div>
                <div className="p-[10px]">
                  <Dots />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-end">
              <p className="text-right text-[#9B51E0] font-bold">You</p>
              <div className="flex gap-3 items-start mt-2">
                <div className="p-[10px]">
                  <Dots />
                </div>
                <div className="bg-[#EEDCFF] rounded-[5px] p-[10px]">
                  <p className="text-gray">
                    No worries. It will be completed ASAP. I’ve asked him
                    yesterday.
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
                    No worries. It will be completed ASAP. I’ve asked him
                    yesterday.
                  </p>
                  <p className="font-xs">19:32</p>
                </div>
                <div className="p-[10px]">
                  <Dots />
                </div>
              </div>
            </div>
          </li>
          {/* start */}
          <li>
            <div className="flex items-center justify-between gap-4">
              <div className="bg-red-1 h-0.5 w-full"></div>
              <p className="whitespace-nowrap font-bold text-base text-red-1">
                New Message
              </p>
              <div className="bg-gray-2 h-0.5 w-full"></div>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-start">
              <p className="text-right text-[#43B78D] font-bold">You</p>
              <div className="flex gap-3 items-start mt-2">
                <div className="bg-[#D2F2EA] rounded-[5px] p-[10px]">
                  <p className="text-gray">
                    No worries. It will be completed ASAP. I’ve asked him
                    yesterday.
                  </p>
                  <p className="font-xs">19:32</p>
                </div>
                <div className="p-[10px]">
                  <Dots />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <input type="date" />
      </div>
    </div>
  );
};

export default PageComponent;
