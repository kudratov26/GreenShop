import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { P } from "../../../common/headings/headings";
import categoriesImg from "/mock-imges/img/categories-img.png";
import { Card } from "../../../common/card/card";
import { categoriesData, flowers } from "../../../../data/data";

export const Categories = () => {
  const [priceRange, setPriceRange] = useState([20, 80]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handlePriceChange = (value, newValue) => {
    setPriceRange(newValue);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginatedFlowers = flowers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(flowers.length / itemsPerPage);

  return (
    <div className="container mt-[45px] flex gap-[50px]">
      <div className="bg-grey dark:bg-slate-900 dark:text-white  text-black w-1/4 px-[18px] py-[14px]">
        <h2 className="text-[18px] font-semibold mb-4">Categories</h2>
        <ul>
          {categoriesData.map((category, index) => (
            <li key={index} className="mb-2 ml-[12px]">
              <div className="group dfrowc justify-between hover:text-green hover:font-bold transition-all duration-300">
                <span>{category.name}</span>
                <span>({category.products})</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="mb-4">
          <h3 className="text-[16px] font-semibold mb-2">Price Range</h3>
          <div className="dfrowc justify-between">
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              getAriaLabel={() => "Price range"}
              getAriaValueText={(value) => `$${value[0]} - $${value[1]}`}
            />
          </div>
          <div className="dforwc ml-[12px]">
            <P>
              Price:{" "}
              <span className="text-green font-bold">${priceRange[0]}</span>-
              <span className="text-green font-bold">${priceRange[1]}</span>
            </P>
          </div>
        </div>
        <div className="size">
          <h2 className="text-gray-700 dark:text-white font-cera-pro font-bold text-xl leading-5 mb-[7px]">
            Size
          </h2>
          <ul>
            {["Small", "Medium", "Large"].map((size, index) => (
              <li key={index} className="mb-2 ml-4 ">
                <div className="group dfrowc justify-between hover:text-green hover:font-bold transition-all duration-300">
                  <span className="text-gray-700 dark:text-white font-cera-pro text-base font-normal leading-[40px]">
                    {size}
                  </span>
                  <span className="text-gray-700  dark:text-white font-cera-pro text-base font-normal leading-[40px]">
                    (78)
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img src={categoriesImg} alt="categories img" />
        </div>
      </div>

      <main className="w-full dfcol">
        <div className="dfrowc justify-between mb-[31px]">
          <ul className="flex gap-[37px]">
            {["All Plants", "New Arrivals", "Sale"].map((navItem, index) => (
              <li
                key={index}
                className="hover:underline underline-offset-[7px] hover:text-green transition-all duration-300 hover:font-bold">
                <a href="#">{navItem}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center dark:bg-slate-900   dark:text-white">
            <label className="mr-2">Sort by:</label>
            <select className="p-2 border dark:bg-slate-900  border-gray-300 border-none">
              <option value="default">Default sorting</option>
              <option value="A-Z">A-Z</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[37px]">
          <Card items={paginatedFlowers} />
        </div>
        <div className="pagination mt-[90px] dfrowc justify-end gap-[10px]">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              className="w-[35px] h-[35px] dfrowc justify-center py-[11px] px-[14px] focus:bg-green rounded-[4px] dark:text-white   text-black border-grey-3 border-[1px] focus:text-white transition-all duration-300 ease-in-out"
              key={index}
              onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};
