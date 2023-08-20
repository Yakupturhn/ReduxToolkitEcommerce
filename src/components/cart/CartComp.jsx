import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/CartSlice";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="my-10 flex items-center justify-between">
        <img
          src={cart?.image}
          alt=""
          className="w-[150px] h-[150px] object-cover "
        />

        <div className="w-[476px]">
          <div>{cart?.title}</div>
          <div>{cart?.description}</div>
        </div>
        <div>
          {cart?.price} TL ({cart?.quantitiy})
        </div>
        <div
          onClick={() => dispatch(removeFromCart(cart?.id))}
          className="bg-red-500 text-white w-[100px] rounded-md flex h-16 items-center justify-center cursor-pointer"
        >
          Ürünü sil
        </div>
      </div>
    </div>
  );
};

export default CartComp;
