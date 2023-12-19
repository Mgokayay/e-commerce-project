import img1 from "../assets/hooli.svg";
import img2 from "../assets/lyft.png";
import img3 from "../assets/brand3.png";
import img4 from "../assets/brand4.png";
import img5 from "../assets/brand5.png";
import img6 from "../assets/brand6.png";

const Client = () => {
  const clientImg = [img1, img2, img3, img4, img5, img6];
  return (
    <div className="flex flex-row items-center  justify-center">
      {clientImg.map((image, index) => (
        <div
          key={index}
          className="flex flex-col py-16 px-12 gap-3 items-center "
        >
          <img src={image} alt={`card ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Client;
