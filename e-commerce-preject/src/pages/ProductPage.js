import Client from "../components/Clients";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BestsellerProductAbout from "../components/BestsellerProductAbout";
import ProductDescription from "../components/ProductDescription";
import ProductPageLinkCont from "../components/ProductPageLinkCont";

import ProductCards from "../components/ProductCards";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
const ProductPage = () => {
  const productList = useSelector((state) => state.products.productList);
  const { path, params } = useRouteMatch();
  const product = productList.filter((product) => product.id == params.id)[0];

  return (
    <>
      <Header />
      <ProductCards product={product} />
      <ProductPageLinkCont />
      <ProductDescription product={product} />
      <BestsellerProductAbout product={product} />
      <Client />
      <Footer />
    </>
  );
};

export default ProductPage;
