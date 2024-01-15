import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductListMain from "../layout/ProductListMain";

import LinkContainer from "../components/LinkContainer";
import ShopCards from "../components/ShopCards";
import FilterContainer from "../components/FilterContainer";
import Client from "../components/Clients";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchProducts } from "../api/appApi";
const ProductListPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  const handleFilterChange = (search) => {
    setSearchTerm(search);
    dispatch(fetchProducts(categoryType, search, sortType));
    setQueryString();
  };
  const [categoryType, setCategoryType] = useState(1);
  const handleCategoryChange = (category) => {
    setCategoryType(category.id);
    dispatch(fetchProducts(category.id, searchTerm, sortType));
    setQueryString(category);
  };
  const [sortType, setSortType] = useState("");
  const handleSortChange = (sort) => {
    setSortType(sort);
    dispatch(fetchProducts(categoryType, searchTerm, sort));
    setQueryString();
  };
  const setQueryString = (category) => {
    // const genderPrefix = category.code.charAt(0) === "e" ? "erkek" : "kadin";
    if (category) {
      let url = `/${category?.title}&filter=${searchTerm}&sort=${sortType}`;

      history.push({ search: url });
    }
  };

  return (
    <>
      <Header />
      <LinkContainer />
      <ShopCards onCategoryChange={handleCategoryChange} />
      <FilterContainer
        onSortChange={handleSortChange}
        sortType={sortType}
        searchTerm={searchTerm}
        onFilterChange={handleFilterChange}
        categoryType={categoryType}
        onCategoryChange={handleCategoryChange}
      />
      <ProductListMain
        searchTerm={searchTerm}
        sortType={sortType}
        categoryType={categoryType}
      />
      <Client />
      <Footer />
    </>
  );
};

export default ProductListPage;
