import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductListMain from "../layout/ProductListMain";

import LinkContainer from "../components/LinkContainer";
import ShopCards from "../components/ShopCards";
import FilterContainer from "../components/FilterContainer";
import Client from "../components/Clients";
const ProductListPage = () => {
  return (
    <>
      <Header />
      <LinkContainer />
      <ShopCards />
      <FilterContainer />
      <ProductListMain />
      <Client />
      <Footer />
    </>
  );
};

export default ProductListPage;
