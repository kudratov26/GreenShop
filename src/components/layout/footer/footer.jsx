import React from "react";
import { H3, SmallP } from "../../common/headings/headings";
import { Input } from "../../common/input/input";
import logo from "/public/mock-imges/icons/logo.svg";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";

import footerImg from "/mock-imges/img/footer.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const footerTopData = [
  {
    img: "https://i.ibb.co/VpWV0gw/Group-36212.png",
    headContent: "Garden Care",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
  {
    img: "https://i.ibb.co/mbr4PGj/Group-36213.png",
    headContent: "Plant Renovation",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
  {
    img: "https://i.ibb.co/ZhxqcB8/Group-36214.png",
    headContent: "Watering Graden",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
];

export const Footer = () => {
  return (
    <>
      <footer className="mt-[100px] ">
        <div className="flex dark:bg-slate-900  bg-grey px-[23px] py-[25px]">
          {footerTopData.map((data, i) => (
            <div
              key={i}
              className={`w-[238px] dfcol border-t-transparent border-b-transparent border-l-transparent  gap-[17px] ${
                i < footerTopData.length - 1
                  ? "border-r-black border-[1px]"
                  : ""
              } mr-[27px]`}>
              <div className="img">
                <img src={data.img} alt="" />
              </div>
              <div className="content dfcol gap-[9px] mr-[34px]">
                <H3>{data.headContent}</H3>
                <SmallP color="text-grey-1">{data.description}</SmallP>
              </div>
            </div>
          ))}
          <div className="w-[354px] dfcol gap-[18px]">
            <H3>Would you like to join newsletters?</H3>
            <Input placeholder={"enter your email address..."} />
            <SmallP color="text-grey-1">
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!
            </SmallP>
          </div>
        </div>
        <div className="logos bg-green bg-opacity-10 px-[23px] py-[27px] dfrowc gap-[60px]">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div className="dfrowc w-[200px]">
            <span className="text-green">
              <PlaceOutlinedIcon />
            </span>
            <SmallP color="text-black">
              70 West Buckingham Ave. Farmingdale, NY 11735
            </SmallP>
          </div>
          <div className="dfrowc w-[200px]">
            <span className="text-green">
              <EmailOutlinedIcon />
            </span>
            <SmallP color="text-black">contact@greenshop.com</SmallP>
          </div>
          <div className="dfrowc w-[200px]">
            <span className="text-green">
              <CallOutlinedIcon />
            </span>
            <SmallP color="text-black">+88 01911 717 490</SmallP>
          </div>
        </div>
        <div className="dark:bg-slate-900  bg-grey dfcol">
          <div className="container mx-auto p-8 flex-grow">
            <div className="flex justify-between">
              <div className="px-4 mb-8">
                <H3 className="text-lg font-semibold mb-4">My Account</H3>
                <p className="mt-[8px]">My Account</p>
                <p className="mt-[8px]">Our stores</p>
                <p className="mt-[8px]">Contact us</p>
                <p className="mt-[8px]">Contact us</p>
                <p className="mt-[8px]">Specials</p>
              </div>

              <div className="px-4 mb-8">
                <H3 className="text-lg font-semibold mb-4">Help & Guide</H3>
                <p className="mt-[8px]">Help Center</p>
                <p className="mt-[8px]">How to Buy</p>
                <p className="mt-[8px]">Shipping & Delivery</p>
                <p className="mt-[8px]">Product Policy</p>
                <p className="mt-[8px]">How to Return</p>
              </div>

              <div className="px-4 mb-8">
                <H3 className="text-lg font-semibold mb-4">Categories</H3>
                <p className="mt-[8px]">House Plants</p>
                <p className="mt-[8px]">Potter Plants</p>
                <p className="mt-[8px]">Seeds</p>
                <p className="mt-[8px]">Small Plants</p>
                <p className="mt-[8px]">Accessories</p>
              </div>

              <div className="px-4 mb-8 dfcol">
                <H3 className="text-lg font-semibold mb-4">Social Media</H3>
                <div className="icons text-green dfrowc gap-[10px] mt-[20px] mb-[33px]">
                  <span>
                    <FacebookIcon />
                  </span>
                  <span>
                    <InstagramIcon />
                  </span>
                  <span>
                    <TwitterIcon />
                  </span>
                  <span>
                    <LinkedInIcon />
                  </span>
                  <span>
                    <YouTubeIcon />
                  </span>
                </div>
                <H3>We accept</H3>
                <div className="mt-[13px]">
                  <img src={footerImg} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="dark:bg-slate-900       bg-white text-black dark:text-white text-center py-4">
            <p>© 2021 GreenShop. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
