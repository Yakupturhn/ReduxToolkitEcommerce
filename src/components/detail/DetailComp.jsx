import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const DetailComp = ({ productDetail }) => {
  const [quantitiy, setQuantitiy] = useState(0);
  const dispatch = useDispatch();

  const decrement = () => {
    if (quantitiy > 0) {
      setQuantitiy(quantitiy - 1);
    }
  };
  const increment = () => {
    if (quantitiy < productDetail?.rating.count) {
      setQuantitiy(quantitiy + 1);
    }
  };
  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        quantitiy: quantitiy,
        price: productDetail?.price,
      })
    );
  };

  return (
    <div className="flex gap-10">
      <img
        className="w-[500px] h-[500px] object-cover"
        src={productDetail?.image}
        alt=""
      />
      <div>
        <div className="text-3xl font-bold">{productDetail?.title}</div>
        <div className="my-2">{productDetail?.description}</div>
        <div className="my-2 text-red-500">
          Rating : {productDetail?.rating?.rate}
        </div>
        <div className="my-2">Count : {productDetail?.rating?.count}</div>
        <div className="text-5xl font-bold">
          Price : {productDetail?.price} <span className="text-sm ">TL</span>
        </div>
        <div className="flex items-center gap-5 my-4">
          <div onClick={decrement} className="text-4xl cursor-pointer">
            -
          </div>
          <input
            className="w-12 text-center text-3xl font-bold cursor-pointer"
            type="text"
            value={quantitiy}
          ></input>
          <div onClick={increment} className="text-4xl cursor-pointer">
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="border w-[200px] h-16 flex items-center justify-center bg-gray-200 cursor-pointer my-4"
        >
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
