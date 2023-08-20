import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts, getProducts } from "../../redux/ProductSlice";
import Product from "./Product";
import ReactPaginate from "react-paginate";
import Loading from "../Loading";

const Products = ({ category, sort }) => {
  const dispatch = useDispatch();
  const { products, productStatus } = useSelector((state) => state.products);
  const [itemOffset, setItemOffset] = useState(0);
  const { search } = useSelector((state) => state.search);

  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [category, dispatch]);

  return (
    <div>
      {productStatus === "LOADING" ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap ">
            {currentItems
              .filter((val) => {
                if (search === "") {
                  return true; // Tüm ürünleri göster
                } else if (
                  val.title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return true; // Aramaya uyanları göster
                } else {
                  return false; // Diğerlerini filtrele
                }
              })
              .sort((a, b) => {
                if (sort === "inc") {
                  return a.price - b.price;
                } else if (sort === "dec") {
                  return b.price - a.price;
                } else {
                  return 0; // Geçersiz bir sıralama ise, herhangi bir sıralama yapma
                }
              })
              .map((product, i) => (
                <Product key={i} product={product} />
              ))}
          </div>
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            activeClassName="active"
          />
        </>
      )}
    </div>
  );
};

export default Products;
