import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductListMain from "../layout/ProductListMain";

import LinkContainer from "../components/LinkContainer";
import ShopCards from "../components/ShopCards";
import FilterContainer from "../components/FilterContainer";
import Client from "../components/Clients";
import { useState } from "react";
const ProductListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleFilterChange = (search) => {
    setSearchTerm(search);
  };
  const [sortType, setSortType] = useState("");
  const handleSortChange = (sort) => {
    setSortType(sort);
  };

  return (
    <>
      <Header />
      <LinkContainer />
      <ShopCards />
      <FilterContainer
        onSortChange={handleSortChange}
        sortType={sortType}
        searchTerm={searchTerm}
        onFilterChange={handleFilterChange}
      />
      <ProductListMain searchTerm={searchTerm} sortType={sortType} />
      <Client />
      <Footer />
    </>
  );
};

export default ProductListPage;
