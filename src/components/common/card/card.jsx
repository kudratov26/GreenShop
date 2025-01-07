import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import currencyFormatter from "../../../constants/currency-formatter";
import { useDispatch } from "react-redux";
import { flowerActions } from "../../../features/flowers-slice";

// React toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


export const Card = ({ items }) => {
  const dispatch = useDispatch();
  const notify = () => toast("add Flower");

  const addCartHandler = (item) => {
    notify()
    dispatch(flowerActions.addFlower(item))
  }
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="card-container relative group">
          <div className="h-[300px] flex items-center justify-center bg-grey relative">
            <Link to={`/shop/${item.id}`}>
              <img src={item.imgUrl} className="card-image w-full h-full object-contain" />
            </Link>
            <div className="icon-container absolute bottom-0 w-full flex justify-center transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-600 ease-in-out">
              <div onClick={() => addCartHandler(item)} className="icon cursor-pointer w-[40px] h-[40px] bg-white text-black rounded-md p-[8px] hover:text-green transition-colors duration-300">
                <LocalGroceryStoreOutlinedIcon />
              </div>
              <div className="icon w-[40px] h-[40px] bg-white text-black rounded-md p-[8px] hover:text-red-500 transition-colors duration-300">
                <FavoriteBorderOutlinedIcon />
              </div>
              <span className="icon w-[40px] h-[40px] bg-white text-black rounded-md p-[8px] hover:text-green transition-colors duration-300">
                <SearchOutlinedIcon />
              </span>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-base font-normal">{item.name}</p>
            <div className="flex justify-between">
              <span className="text-lg font-bold text-red-500 line-through">
                {item.discount > 0 &&
                  currencyFormatter(item.price, item.currency, item.discount).moneyWithOutDiscount
                }
              </span>
              <span className="text-lg font-bold text-green">
                {currencyFormatter(item.price, item.currency, item.discount).moneyWithDiscount}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
