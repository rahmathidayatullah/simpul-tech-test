import React from "react";

const LoadingLoadMessage = () => {
  return (
    <div className="absolute left-0 right-0 bottom-[8.5rem] p-2 bg-[#E9F3FF]">
      <span className="loading loading-spinner loading-sm mr-4"></span>
      Please wait while we connect you with one of our team ...
    </div>
  );
};

export default LoadingLoadMessage;
