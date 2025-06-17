import Spaces from "../../components/Spaces";
import Footer from "../../Footer";

import room1Img from "../../assets/room1.jpg";
import room2Img from "../../assets/room2.jpg";
import room3Img from "../../assets/room3.jpg";
import room4Img from "../../assets/room4.jpg";

const ROOMSLIDES = [room1Img, room2Img, room3Img, room4Img];

export default function Room({ image, title, pricing, tagline, description }) {
  return (
    <>
      <img src={image} alt="hotel room" />
      <h2>{title}</h2>
      <p>{pricing}</p>
      <div>
        <h3>{tagline}</h3>
        <p>{description}</p>
        <div></div>
      </div>

      <Spaces space="Gallery" slideImgs={ROOMSLIDES} />
      <Footer />
    </>
  );
}
