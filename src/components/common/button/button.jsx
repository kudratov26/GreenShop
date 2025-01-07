import React from "react";

const Button = ({ children, iconRight, iconLeft, type, clickHandler }) => {
  const iconPositionClasses = iconRight
    ? "flex-row px-[17px] py-[7px]"
    : iconLeft
      ? "flex-row"
      : "";

  const buttonStyle = {
    btn1: "px-[17px] py-[7px] text-white",
    btn2: "px-[26px] py-[10px] text-white",
    incDec: "px-[10px] py-[21px] rounded-[29px] w-[33px] h-[38px] text-white",
    wb: "px-[32px] py-[11px] text-white",
    wob: "px-[20px] py-[11px] border-[1px] border-green bg-white text-green",

  };

  return (
    <>
      <button
        onClick={clickHandler}
        className={`bg-green ${buttonStyle[type]}   rounded-[6px] font-bold  ${iconPositionClasses} flex items-center   space-x-2 gap-[4px]`}>
        {iconLeft && typeof iconLeft === "string" ? (
          <img src={iconLeft} alt="Icon" className="w-6 h-6" />
        ) : (
          <span className="material-icons">{iconLeft}</span>
        )}
        {children}
        {iconRight && <span className="material-icons">{iconRight}</span>}
      </button>
    </>
  );
};

export default Button;
