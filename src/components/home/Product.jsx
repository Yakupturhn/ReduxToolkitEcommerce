import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`products/${product?.id}`)}
      className="w-[440px] p-3 m-2 relative"
    >
      <div className="absolute text-3xl font-bold rounded-md top-0 right-0 bg-black text-white p-2 m-1">
        {product?.price} <span className="text-sm">TL</span>
      </div>

      <img
        className="w-[200px] h-[200px] object-cover m-auto"
        src={product?.image}
        alt=""
      />
      <div className="text-center px-3 m-3 text-xl font-bold cursor-pointer">
        {product?.title}
      </div>
    </div>
  );
};

export default Product;
