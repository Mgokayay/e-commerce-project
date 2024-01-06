import { useSelector } from "react-redux";
const ShopCards = () => {
  const categories = useSelector((state) => state.global.categories);
  const sortedCategories = categories.sort((a, b) => b.rating - a.rating);
  const top5Categories = sortedCategories.slice(0, 5);
  return (
    <div className="bg-[#FAFAFA] flex gap-2 justify-center  flex-col xl:flex-row pb-8">
      {top5Categories.map((category, index) => (
        <a
          href={`/shopping/${
            category.code.charAt(0) === "e" ? "erkek" : "kadin"
          }/${category.title}`}
          key={index}
        >
          <img
            src={category.img}
            alt={`card ${index}`}
            className="cursor-pointer w-52 h-64 hover:scale-105 duration-200 transition opacity-100 hover:opacity-60"
          />
          <h6 className="text-2xl font-bold">{category.title}</h6>
        </a>
      ))}
    </div>
  );
};

export default ShopCards;
