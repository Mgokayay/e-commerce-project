import { Carousel1 } from "../components/Carousel1";
import EditorsPick from "../layout/EditorsPick";
import Header from "../components/Header";
import BestsellerProduct from "../layout/BestsellerProduct";

const HomePage = () => {
  return (
    <>
      <Header />
      <Carousel1 />
      <EditorsPick />
      <BestsellerProduct />
    </>
  );
};

export default HomePage;
