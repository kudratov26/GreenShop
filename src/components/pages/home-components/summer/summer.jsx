import React from "react";
import { H4, SmallP } from "../../../common/headings/headings";
import flowerBox from "/mock-imges/img/box-img-1.png";
import flowerBox2 from "/mock-imges/img/box-img-2.png";
import Button from "../../../common/button/button";
import EastIcon from "@mui/icons-material/East";

export const Summer = () => {
  return (
    <div className="w-full mt-[146px] dfrowc gap-[28px]">
      <div className="box w-[586px] h-[250px]  p-[25px] rounded-md  bg-grey dark:bg-slate-900 dark:border-2 dark:border-grey-2 flex flex-row-reverse justify-end">
        <div className=" dfcol gap-[23px] items-end">
          <H4>
            SUMMER CACTUS <br /> & SUCCULENTS
          </H4>
          <div className="w-[281px] text-end">
            <SmallP color="text-grey-1">
              We are online plant shop offering a wide range of cheap and trendy
              plants
            </SmallP>
          </div>
          <div className="text-white">
            <Button iconRight={<EastIcon />}>Find more</Button>
          </div>
        </div>
        <div className="img w-[300px] relative  mt-[-90px] ml-[-40px]">
          <img src={flowerBox} alt="" className="absolute bx-img" />
        </div>
      </div>
      <div className="box w-[586px] h-[250px]  p-[25px] rounded-md  bg-grey dark:bg-slate-900 dark:border-2 dark:border-grey-2 flex flex-row-reverse justify-end">
        <div className=" dfcol gap-[23px] items-end">
          <H4>
            SUMMER CACTUS <br /> & SUCCULENTS
          </H4>
          <div className="w-[281px] text-end">
            <SmallP color="text-grey-1">
              We are online plant shop offering a wide range of cheap and trendy
              plants
            </SmallP>
          </div>
          <div className="text-white">
            <Button iconRight={<EastIcon />}>Find more</Button>
          </div>
        </div>
        <div className="img w-[300px] relative  mt-[-90px] ml-[-40px]">
          <img src={flowerBox2} alt="" className="absolute bx-img" />
        </div>
      </div>
    </div>
  );
};
