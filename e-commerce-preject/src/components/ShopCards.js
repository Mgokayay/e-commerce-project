import img1 from "../assets/productlistpage/5items1.png";
import img2 from "../assets/productlistpage/5items2.png";
import img3 from "../assets/productlistpage/5items3.png";
import img4 from "../assets/productlistpage/5items4.png";
import img5 from "../assets/productlistpage/5items5.png";

const ShopCards = () => {
  const itemsImg = [img1, img2, img3, img4, img5];
  return (
    <div className="bg-[#FAFAFA] flex gap-2 justify-center flex-col xl:flex-row pb-8">
      {itemsImg.map((image, index) => (
        <img
          src={image}
          alt={`card ${index}`}
          className="cursor-pointer hover:scale-105 duration-200 transition opacity-100 hover:opacity-60"
        />
      ))}
    </div>
  );
};

export default ShopCards;
