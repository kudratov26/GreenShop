import { Outlet } from "react-router-dom";
import { Products } from "../../../components/pages/shop-components";

export const Shop = () => {
  return (
    <>
      <Outlet />
      <Products />
    </>
  );
};
