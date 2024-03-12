import Footer from "../components/Footer";
import Header from "../components/Header";
// import ProductListMain from "../layout/ProductListMain";
import InfiniteScroll from "react-infinite-scroll-component";
import LinkContainer from "../components/LinkContainer";
import ShopCards from "../components/ShopCards";
import FilterContainer from "../components/FilterContainer";
import Client from "../components/Clients";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchNextPage, fetchProducts } from "../api/appApi";
import ProductCard from "../components/ProductCard";

const ProductListPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productList } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryType, setCategoryType] = useState(1);
  const [sortType, setSortType] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const handleFilterChange = (search) => {
    setSearchTerm(search);
    dispatch(fetchProducts(categoryType, search, sortType));
    setQueryString();
  };

  const handleCategoryChange = (category) => {
    setCategoryType(category.id);
    dispatch(fetchProducts(category.id, searchTerm, sortType));
    setQueryString(category);
  };

  const handleSortChange = (sort) => {
    setSortType(sort);
    dispatch(fetchProducts(categoryType, searchTerm, sort));
    setQueryString();
  };

  const fetchData = (data) => {
    dispatch(fetchNextPage(data))
      .then(() => {
        setHasMore(true);
      })
      .catch((error) => {
        setHasMore(false);
      });
  };

  const setQueryString = (category) => {
    // const genderPrefix = category === "kadin" ? "kadın" : "erkek";
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
      <InfiniteScroll
        dataLength={productList.length} //This is important field to render the next data
        next={() =>
          fetchData({
            categoryType,
            searchTerm,
            sortType,
            offset: 25,
          })
        }
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="flex flex-col px-[10%]">
          <ProductCard />
        </div>
      </InfiniteScroll>

      {/* <ProductListMain
      // searchTerm={searchTerm}
      // sortType={sortType}
      // categoryType={categoryType}
      /> */}
      <Client />
      <Footer />
    </>
  );
};

export default ProductListPage;
