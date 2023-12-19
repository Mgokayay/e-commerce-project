import ProductCard from "../components/ProductCard";

const ProductListMain = () => {
  return (
    <div className="flex flex-col w-[80%] justify-center items-center">
      <div className="flex flex-col gap-12">
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductListMain;
