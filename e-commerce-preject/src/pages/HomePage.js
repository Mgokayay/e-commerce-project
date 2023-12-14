import { Carousel1 } from "../components/Carousel1";
import EditorsPick from "../layout/EditorsPick";
import Header from "../components/Header";
import BestsellerProduct from "../layout/BestsellerProduct";
import { Carousel2 } from "../components/Carousel2";

const HomePage = () => {
  return (
    <>
      <Header />
      <Carousel1 />
      <EditorsPick />
      <BestsellerProduct />
      <Carousel2 />
    </>
  );
};

export default HomePage;
