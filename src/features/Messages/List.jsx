import React from "react";
import Message from "./Item";

// hooks
import useMessages from "hooks/useMessages";

// components
import WrapperLoading from "components/WrapperLoading";

const List = () => {
  const [messages, loading] = useMessages();

  if (loading.list) {
    return <WrapperLoading />;
  }
  return (
    <ul>
      {messages.map((message, index) => {
        return <Message message={message} index={index} key={message.id} />;
      })}
    </ul>
  );
};

export default List;
