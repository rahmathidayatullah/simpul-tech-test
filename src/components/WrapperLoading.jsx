import React from "react";

// components
import Loading from "components/Loading";

const WrapperLoading = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center relative bottom-20">
      <Loading />
      <p className="mt-4">Loading Chats...</p>
    </div>
  );
};

export default WrapperLoading;
