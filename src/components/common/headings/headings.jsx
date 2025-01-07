import { color } from "@mui/system";
import React from "react";

const H1 = ({ children }) => {
  return (
    <h1 className="text-black dark:text-white text-[70px] font-extrabold leading-[70px]">
      {children}
    </h1>
  );
};

const H2 = ({ children }) => {
  return (
    <h2 className="text-black dark:text-white text-[30px] font-bold leading-[16px]">
      {children}
    </h2>
  );
};
const H3 = ({ children }) => {
  return (
    <h3 className="text-black dark:text-white text-[17px] font-bold leading-[16px]">
      {children}
    </h3>
  );
};
const H4 = ({ children }) => {
  return (
    <h2 className="text-black dark:text-white text-[20px] font-bold leading-[26px]">
      {children}
    </h2>
  );
};

/* custom heading */
const CH = ({ children, size = "text-[28px]", color = "text-black" }) => {
  return (
    <h2 className={`${color} ${size} dark:text-white font-bold leading-[26px]`}>
      {children}
    </h2>
  );
};

const P = ({ children, color = "black" }) => {
  return (
    <>
      <p
        className={`text-[17px]  dark:text-white ${color} Cera Pro leading-[24px] font-medium`}>
        {children}
      </p>
    </>
  );
};
const SmallP = ({ children, color = "text-green" }) => {
  return (
    <>
      <p
        className={`text-[14px] dark:text-white  ${color} Cera Pro leading-[16px] font-medium`}>
        {children}
      </p>
    </>
  );
};

export { H1, H2, H3, H4, CH, P, SmallP };
