import React from "react";
import { Link } from "react-router-dom";
import logo from "/public/mock-imges/icons/logo.svg";
import SearchIcon from "/mock-imges/icons/search-icon.svg";
import ShopIcon from "/mock-imges/icons/shop-icon.svg";
import logOut from "/mock-imges/icons/exit-account.svg";
import Button from "../../common/button/button";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import { useTranslation } from "react-i18next";
import { changeLang } from "../../../locale/i18n";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';

const linkBaseStyle =
  "capitalize hover:underline hover:font-semibold hover:text-green-700 transition-all duration-300 text-black underline-offset-[25px] dark:text-white";

export const Navbar = ({ toggleTheme }) => {
  const { t } = useTranslation();
  const orderCount = useSelector(state => state.cart.flowers.length)
  const flowers = useSelector(state => state.cart.flowers)
  console.log(flowers);

  const themeHandler = () => toggleTheme();
  const changeLanguage = (e) => changeLang(e.target.value);


  return (
    <div className=" dark:text-white dark:bg-slate-900  sticky top-0 bg-white z-10">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <nav className="dfrowc justify-between py-[30px] transition-all .5s">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className={`${linkBaseStyle}`}>
              {t("home")}
            </Link>
          </li>
          <li>
            <Link to="/shop" className={`${linkBaseStyle}`}>
              {t("shop")}
            </Link>
          </li>
          <li>
            <Link to="/plant" className={`${linkBaseStyle}`}>
              {t("plantCare")}
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`${linkBaseStyle}`}>
              {t("blogs")}
            </Link>
          </li>
        </ul>
        <div className="">
          <span onClick={themeHandler} className="cursor-pointer">
            <Brightness6Icon />
          </span>
        </div>
        <div className="">
          <select
            onChange={changeLanguage}
            className="dark:text-white dark:bg-slate-900">
            <option value="en">{t("en")}</option>
            <option value="uz">{t("uz")}</option>
            <option value="ru">{t("ru")}</option>
          </select>
        </div>
        <div className="logos dfrowc space-x-4 ">
          <IoSearch size={25} />
          <div className="dfrowc relative">
            <FaCartShopping size={25} />
            <span className="absolute bg-green w-[18px] h-[18px] dfrowc justify-center mt-[-12px] ml-[15px] rounded-full text-white text-[15px] font-medium transition-all duration-300">
              {orderCount}
            </span>
          </div>

          <Button type={"btn1"} iconLeft={logOut}>
            {t("navBtn")}
          </Button>
        </div>
      </nav>
    </div>
  );
};
