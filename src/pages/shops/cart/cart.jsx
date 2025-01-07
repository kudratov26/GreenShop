import React, { useEffect, useRef, useState } from "react";
import shopImg1 from "/mock-imges/img/shop-card-1.png";
import shopImg2 from "/mock-imges/img/shop-card-2.png";
import shopImg3 from "/mock-imges/img/shop-card-3.png";
import shopImg4 from "/mock-imges/img/shop-card-4.png";
import { CH, P, SmallP } from "../../../components/common/headings/headings";
import StarIcon from "@mui/icons-material/Star";
import Button from "../../../components/common/button/button";
import heart from "/mock-imges/icons/heart-green.svg";
import { useParams } from "react-router-dom";
import { flowers } from "../../../data/data";
import currencyFormatter from "../../../constants/currency-formatter";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { flowerActions } from "../../../features/flowers-slice";
import './cart.css'


const SizeOption = ({ size }) => {
  return (
    <button className="w-[40px] mt-[11px] mb-[23px] h-[40px] flex items-center justify-center focus:border-green  focus:text-green text-center border-[1px] px-4 rounded-full cursor-pointer transition-all duration-300 ease-in-out">
      <P>{size}</P>
    </button>
  );
};


export const Cart = () => {
  const [num, setNum] = useState(1);
  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);
  const imageList = [shopImg1, shopImg2, shopImg3, shopImg4];
  const notify = () => toast("Add To Card")
  const param = useParams();
  const flower = flowers.find(item => item.id === +param.id)
  const dispatch = useDispatch();
  const addToCardHandler = () => {
    notify()
    dispatch(flowerActions.addFlower({ ...flower, num }))
  }

  // const cardRef = useRef(null);
  // const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     const { clientX, clientY } = e;
  //     const { left, top, width, height } = cardRef.current.getBoundingClientRect();

  //     // Calculate the rotation based on the cursor position relative to the card
  //     const x = (clientY - top - height / 2) / (height / 2);
  //     const y = (clientX - left - width / 2) / (width / 2);

  //     setRotation({ x, y });
  //   };

  //   cardRef.current.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     cardRef.current.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);


  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = cardRef.current.getBoundingClientRect();

      // Check if the mouse is over the card
      const isMouseOverCard =
        clientX >= left &&
        clientX <= left + width &&
        clientY >= top &&
        clientY <= top + height;

      if (isMouseOverCard) {
        // Calculate the rotation based on the cursor position relative to the card
        const x = (clientY - top - height / 2) / (height / 2);
        const y = (clientX - left - width / 2) / (width / 2);

        setRotation({ x, y });
      }
    };

    cardRef.current.addEventListener('mousemove', handleMouseMove);

    return () => {
      cardRef.current.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div>
        <p className="font-bold"> Home/Shop </p>
        <div className="flex gap-[52px] mt-[43px]">
          <div className="card h-[480px] ">
            <div className="flex gap-[29px]">
              <div className="imgs dcol gap-[16px]">
                {imageList.map((image, index) => (
                  <div
                    key={index}
                    className="w-[100px] cursor-pointer mb-[16px]"
                  >
                    <img
                      src={flower.imgUrl}
                      className="w-full rounded-md bg-grey"
                    />
                  </div>
                ))}
              </div>
              <div ref={cardRef} className="card relative w-[444px] bg-grey rounded-md overflow-hidden expanded">
                <div className="card-inner" style={{ transform: `rotateX(${rotation.x * 15}deg) rotateY(${rotation.y * 20}deg)` }}>
                  <img src={flower.imgUrl} alt={flower.name} className="derevo" />
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="dfcol gap-[15px]">
              <CH>{flower.name}</CH>
              <div className="flex justify-between">
                <CH size="text-[22px]" color="text-green">
                  {currencyFormatter(flower.price, flower.currency, flower.discount).moneyWithDiscount}
                </CH>
                <div className="flex gap-[11px]">
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          star <= 4 ? "text-[#ffac0c]" : "text-[#c4c4c4]"
                        }>
                        <StarIcon />
                      </span>
                    ))}
                  </div>
                  <div>
                    <span>19 Customer Reviews</span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="bg-green-500 bg-opacity-50 mt-[12px] mb-[15px]" />
            <div className="dfcol gap-[10px] mb-[24px]">
              <P>Short Description:</P>
              <SmallP color="text-grey-1">
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground.
              </SmallP>
            </div>
            <div className="size">
              <P>Size:</P>
              <div className="flex gap-2">
                <SizeOption size="S" />
                <SizeOption size="M" />
                <SizeOption size="L" />
                <SizeOption size="XL" />
              </div>
            </div>
            <div className="flex gap-[26px]">
              <div className="dfrowc gap-[23px] ">
                <Button type="incDec" clickHandler={dec}>
                  -
                </Button>
                <span className="text-[20px] font-bold">{num}</span>
                <Button type="incDec" clickHandler={inc}>
                  +
                </Button>
              </div>
              <div className="dfrowc gap-[10px]">
                <Button type="wb">BUY NOW</Button>
                <Button type="wob" clickHandler={addToCardHandler} >Add to cart</Button>
                <div className="w-[40px] py-[10px] px-[10px] border-[1px] border-green bg-white text-green rounded-md dfrowc justify-center">
                  <img src={heart} alt="" className="fill-green" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
