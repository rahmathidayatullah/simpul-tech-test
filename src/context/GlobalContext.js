import { createContext, useState } from "react";

const Context = createContext(null);

function Provider({ children }) {
  const [activeTab, setActiveTab] = useState({
    messages: false,
    task: false,
    detailMessage: false,
    idMessage: null,
    openMenu: false,
    selectMenu: false,
  });

  const handleClose = () => {
    setActiveTab({
      ...activeTab,
      messages: !activeTab.messages,
      task: false,
      detailMessage: false,
      selectMenu: true,
    });
  };

  const handleOpenMenu = () => {
    setActiveTab({
      ...activeTab,
      openMenu: !activeTab.openMenu,
    });
  };

  const handleDetailMessage = (id) => {
    setActiveTab({
      ...activeTab,
      messages: false,
      task: false,
      detailMessage: true,
      idMessage: id,
      selectMenu: true,
    });
  };

  const handleActiveMessage = () => {
    setActiveTab({
      ...activeTab,
      messages: !activeTab.messages,
      task: false,
      detailMessage: false,
      selectMenu: true,
    });
  };
  const handleActiveTask = () => {
    setActiveTab({
      ...activeTab,
      messages: false,
      task: !activeTab.task,
      detailMessage: false,
      selectMenu: true,
    });
  };

  return (
    <Context.Provider
      value={{
        activeTab,
        handleDetailMessage,
        handleClose,
        handleOpenMenu,
        handleActiveMessage,
        handleActiveTask,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
