import ProductCard from "../components/ProductCard";
import img1 from "../assets/productlistpage/Pagination.png";
const ProductListMain = ({ searchTerm, sortType, categoryType }) => {
  return (
    <div className="flex flex-col px-[10%]">
      <ProductCard
        searchTerm={searchTerm}
        sortType={sortType}
        categoryType={categoryType}
      />
      <div className="flex justify-center items-center py-20">
        <img src={img1} alt="img1" />
      </div>
    </div>
  );
};

export default ProductListMain;
