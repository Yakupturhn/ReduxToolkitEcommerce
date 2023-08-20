import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/CartSlice";
import { useNavigate } from "react-router-dom";
import { searchItem } from "../../../redux/SearchSlice";
const NavbarRight = () => {
  const dispatch = useDispatch();
  const { itemCount } = useSelector((state) => state.carts);
  const { search } = useSelector((state) => state.search);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  console.log(search);
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center border rounded-full bg-gray-200 p-3">
        <input
          className="bg-gray-200 outline-none"
          type="text"
          placeholder="Arama yapınız..."
          value={search}
          onChange={(e) => dispatch(searchItem(e.target.value))}
        />
        <BiSearch size={28} />
      </div>
      <AiOutlineHeart size={28} />
      <div onClick={() => navigate("cart")} className="relative">
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </div>
        <SlBasket size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;
