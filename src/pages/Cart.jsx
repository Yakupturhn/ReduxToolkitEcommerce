import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/CartSlice";
import CartComp from "../components/cart/CartComp";
import { clearCart } from "../redux/CartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts); // Redux state'den "cart" almalısınız, "carts" değil.

  console.log(carts, totalAmount, itemCount);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div>
      {carts.length > 0 ? (
        carts.map((cart, i) => <CartComp key={i} cart={cart} />)
      ) : (
        <div>Kartınız Boş</div>
      )}
      <div className="flex items-center gap-2 justify-end text-2xl ">
        {" "}
        TOPLAM TUTAR : <span>{totalAmount} TL</span>{" "}
        {carts.length > 0 && (
          <div
            onClick={() => dispatch(clearCart())}
            className="bg-red-500 text-white w-[200px] rounded-md flex h-16 items-center justify-center cursor-pointer"
          >
            Tümünü Sil
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
