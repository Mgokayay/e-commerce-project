import Client from "../components/Clients";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BestsellerProductAbout from "../components/BestsellerProductAbout";
import ProductDescription from "../components/ProductDescription";
import ProductPageLinkCont from "../components/ProductPageLinkCont";

import ProductCards from "../components/ProductCards";
const ProductPage = () => {
  return (
    <>
      <Header />
      <ProductCards />
      <ProductPageLinkCont />
      <ProductDescription />
      <BestsellerProductAbout />
      <Client />
      <Footer />
    </>
  );
};

export default ProductPage;
