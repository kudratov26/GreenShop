import React from "react";
import { H2, H4, P, SmallP } from "../../../common/headings/headings";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const blogData = [
  {
    id: "m1",
    img: "https://i.ibb.co/ZdMpf0H/01.png",
    time: "September 13  I Read in 2 minutes",
    thumb: "Cactus & Succulent Care Tips",
    describtion:
      "Cacti are succulents are easy care plants for any home or patio. ",
  },
  {
    id: "m2",
    img: "https://i.ibb.co/MgHgt2d/02.png",
    time: "September 13  I Read in 2 minutes",
    thumb: "Top 10 Succulents for Your Home",
    describtion: "Best in hanging baskets. Prefers medium to high light.",
  },
  {
    id: "m3",
    img: "https://i.ibb.co/FHwVZvy/03.png",
    time: "September 15  I Read in 3 minutes",
    thumb: "Cacti & Succulent Care Tips",
    describtion:
      "Cacti and succulents thrive in containers and because most are..",
  },
  {
    id: "m4",
    img: "https://i.ibb.co/QYzs7qv/04.png",
    time: "September 15  I Read in 2 minutes",
    thumb: "Best Houseplants Room by Room",
    describtion: "The benefits of houseplants are endless. In addition to..",
  },
];
export const OurBlogs = () => {
  return (
    <>
      <div className="mt-[138px] dfcol gap-[15px] text-center dark:text-white dark:bg-slate-900">
        <H2>Our Blog Posts</H2>
        <P color="text-grey-1">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </P>
      </div>
      <div className="cards dfrowc gap-[44px] mt-[35px]">
        {blogData.map((data) => (
          <div key={data.id} className="card bg-grey dark:text-white dark:bg-slate-900  w-[268px]">
            <div className="w-[268px]">
              <img src={data.img} alt="" className="w-full" />
            </div>
            <div className="content dfcol gap-[4px] px-[11px] pt-[8px]  pb-[13px]">
              <SmallP>{data.time}</SmallP>
              <H4>{data.thumb}</H4>
              <SmallP color="text-grey-1">{data.describtion}</SmallP>
              <button className="mt-[5px] dfrowc gap-[3px] hover:text-green transition-all duration-400 ease-out">
                <SmallP color="text-black hover:text-green">Read More</SmallP>
                <span className="w-[16px]">
                  <ArrowForwardIcon />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
