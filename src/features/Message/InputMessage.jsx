import React from "react";

//component
import Button from "components/Button";

const InputMessage = () => {
  return (
    <div className="flex gap-4 items-center">
      <input
        type="text"
        placeholder="Type new message"
        className="input input-bordered w-full border border-gray-1 placeholder-gray-1"
      />
      <Button>Send</Button>
    </div>
  );
};

export default InputMessage;
