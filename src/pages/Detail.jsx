import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProducts } from "../redux/ProductSlice";
import DetailComp from "../components/detail/DetailComp";
import Loading from "../components/Loading";
import { STATUS } from "../utils/status";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );

  console.log(productDetail);
  useEffect(() => {
    dispatch(getDetailProducts(id));
  }, [dispatch, id]);

  if (productDetailStatus === "FAIL") {
    return "BÖYLE BİR ÜRÜN BULUNAMADI";
  }

  return (
    <div>
      {productDetailStatus === STATUS.LOADING ? (
        <Loading />
      ) : (
        <DetailComp productDetail={productDetail} />
      )}
    </div>
  );
};

export default Detail;
