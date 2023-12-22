import React, { useContext, useEffect, useState } from "react";

// component
import HeaderV2 from "components/HeaderV2";
import TabOpenV2 from "components/Tab";
import IconTask from "components/icon/Task";
import IconMessage from "components/icon/Message";
import Header from "components/Header";

// feature
import Messages from "features/Messages/List";
import Message from "features/Message/List";
import InputMessage from "features/Message/InputMessage";
import Task from "features/Task/List";

// context
import { Context } from "../context/GlobalContext";
import ButtonRoundedFull from "./Button/RoundedFull";
import IconLighting from "./icon/Lighting";
import LoadingLoadMessage from "features/Message/LoadingLoadMessage";

const Content = () => {
  // dummy state
  const [isLoadingLoadMessage, setIsLoadingLoadMessage] = useState(true);

  const { activeTab, handleOpenMenu, handleActiveMessage, handleActiveTask } =
    useContext(Context);

  function openMenu(param) {
    handleOpenMenu(param);
  }

  // dummy action
  useEffect(() => {
    setIsLoadingLoadMessage(true);
    setTimeout(() => {
      setIsLoadingLoadMessage(false);
    }, 2000);
  }, [activeTab.detailMessage]);

  return (
    <div className="flex flex-col w-full">
      <HeaderV2 />
      <div className="relative h-full">
        <footer className="absolute left-0 right-0 bottom-0">
          {activeTab.selectMenu &&
          (activeTab.task || activeTab.messages || activeTab.detailMessage) ? (
            <div className="dialog bg-white h-[737px] w-[734px] absolute right-[3rem] bottom-[7.5rem] py-6 rounded-md">
              <Header />
              {activeTab.messages ? (
                <div className="px-[22px] h-full">
                  <div className="h-[90%] overflow-auto">
                    <Messages />
                  </div>
                </div>
              ) : (
                ""
              )}
              {activeTab.detailMessage ? (
                <div className="mx-[22px] h-full relative">
                  <Message />
                  {isLoadingLoadMessage ? <LoadingLoadMessage /> : ""}
                  <InputMessage />
                </div>
              ) : (
                ""
              )}
              {activeTab.task ? (
                <div className="px-[22px]">
                  <Task />
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          <div className="flex items-end justify-end py-8 px-[22px]">
            {activeTab.openMenu ? (
              <div className="flex gap-3 items-center justify-end px-[22px]">
                <div className={activeTab.task ? "order-2" : "order-1"}>
                  {!activeTab.selectMenu ||
                  (!activeTab.task &&
                    !activeTab.messages &&
                    !activeTab.detailMessage) ? (
                    <p className="text-white text-center relative bottom-2">
                      Task
                    </p>
                  ) : (
                    ""
                  )}
                  <TabOpenV2
                    to="task"
                    active={activeTab.task}
                    variant={activeTab.task ? "orange" : "white"}
                    onClick={() => handleActiveTask()}
                  >
                    <IconTask
                      height={32}
                      width={24}
                      fill={activeTab.task ? "#ffffff" : "#F8B76B"}
                    />
                  </TabOpenV2>
                </div>
                <div className={activeTab.messages ? "order-2" : "order-1"}>
                  {!activeTab.selectMenu ||
                  (!activeTab.task &&
                    !activeTab.messages &&
                    !activeTab.detailMessage) ? (
                    <p className="text-white text-center relative bottom-2">
                      Inbox
                    </p>
                  ) : (
                    ""
                  )}
                  <TabOpenV2
                    to="messages"
                    active={activeTab.messages}
                    variant={activeTab.messages ? "purple" : "white"}
                    onClick={() => handleActiveMessage()}
                  >
                    <IconMessage
                      height={26}
                      width={26}
                      fill={activeTab.messages ? "#ffffff" : "#8785FF"}
                    />
                  </TabOpenV2>
                </div>
              </div>
            ) : (
              ""
            )}
            {!activeTab.selectMenu ||
            (!activeTab.task &&
              !activeTab.messages &&
              !activeTab.detailMessage) ? (
              <div className="relative bottom-2">
                <ButtonRoundedFull onClick={() => openMenu("openMenu")}>
                  <IconLighting />
                </ButtonRoundedFull>
              </div>
            ) : (
              ""
            )}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Content;
