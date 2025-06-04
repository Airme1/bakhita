import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./components/embla.css";
import Spaces from "./components/Spaces";
import room1Img from "./assets/room1.jpg";
import room2Img from "./assets/room2.jpg";
import room3Img from "./assets/room3.jpg";
import room4Img from "./assets/room4.jpg";
import hall1Img from "./assets/hall1.jpg";
import hall2Img from "./assets/hall2.jpg";
import hall3Img from "./assets/hall3.jpg";
import hall4Img from "./assets/hall4.jpg";
import Review from "./Review";
import Utilities from "./Utilities";
import ImageGallery from "./ImageGallery";

const ROOMSLIDES = [room1Img, room2Img, room3Img, room4Img];
const HALLSLIDES = [hall1Img, hall2Img, hall3Img, hall4Img];

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Spaces space="Our Rooms" slideImgs={ROOMSLIDES} />
      <Spaces space="Our Facilities" slideImgs={HALLSLIDES} />
      <Review
        title="Proven Track of Satisfied Clients"
        subtext="See what our clients are saying"
      />
      <Utilities
        title="Designed For Your Comfort"
        subtext="Every detail is thoughtfully arranged to make your stay smooth, secure, and stress-free"
      />
      <ImageGallery />
    </>
  );
}

export default App;
