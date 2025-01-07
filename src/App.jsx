import { useEffect, useState } from "react";
import { Footer, Navbar } from "./components/layout";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Shop } from "./pages/shops/shop/shop";
import { Login, Register } from "./pages/auth";
import { Cart, Checkout, ShopItem } from "./pages/shops";
import { NotFound } from "./pages/not-found/not-found";
import { Account } from "./pages/account/account";
import {
  AccountDetails,
  Address,
  Downloads,
  Orders,
  Reports,
  Support,
  Wishlist,
} from "./pages/account";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setTheme("dark")
      : setTheme("light");
  }, []);

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className="">
      <div className="container dark:text-white">
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />}>
            <Route path=":id" element={<ShopItem />} />
            <Route path="shopping-cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
          <Route path="/account" element={<Account />}>
            <Route path="shopping-details" element={<AccountDetails />} />
            <Route path="address" element={<Address />} />
            <Route path="downloads" element={<Downloads />} />
            <Route path="orders" element={<Orders />} />
            <Route path="reports" element={<Reports />} />
            <Route path="support" element={<Support />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
