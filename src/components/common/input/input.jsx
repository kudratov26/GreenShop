import React from "react";

export const Input = ({ placeholder }) => {
  return (
    <div className="w-[354px] flex items-center relative">
      <input
        type="text"
        className="w-full  overflow-hidden placeholder-grey-5 py-[12px] px-[11px] rounded-md"
        placeholder={placeholder}
      />
      <button className="absolute right-0 rounded-r-md  bg-green text-white py-[12px] px-[26px]">
        Join
      </button>
    </div>
  );
};
