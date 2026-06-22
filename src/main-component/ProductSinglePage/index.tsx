import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../../store/slices/cartSlice";
import type { AppDispatch } from "../../store";

import HeaderThree from "../../components/header3";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Product from "./product";
import api from "../../api";
import ProductTabs from "./alltab";
import Footer from "../../components/footer/Footer";

/* ---------------- PRODUCT TYPE ---------------- */

interface ProductType {
  id: number;
  slug: string;
  title: string;
  proImg: string;
  price: number | string;
  oldPrice?: number | string;
  brand?: string;
  size?: string;
}

/* ---------------- COMPONENT ---------------- */

const ProductSinglePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const dispatch = useDispatch<AppDispatch>();

  const products: ProductType[] = api();
  
  const product = products.find((p) => p.slug === slug) || null;

  /* ---------------- ADD TO CART ---------------- */

  const addToCartProduct = (item: ProductType, qty: number = 1) => {
    dispatch(
      addToCart({
        ...item,
        price: Number(item.price),
        qty,
      })
    );
  };

  /* ---------------- RENDER ---------------- */

  return (
    <Fragment>
      <HeaderThree />

      <PageTitle
        pageTitle={"Better Plumbing Better Living"}
        pagesub={"Product Single"}
      />

      <section className="wpo-shop-single-section section-padding">
        <div className="container">
          {product && (
            <Product item={product} addToCart={addToCartProduct} />
          )}

          <ProductTabs />
        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ProductSinglePage;