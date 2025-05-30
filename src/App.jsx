import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./components/embla.css";
// import room1Img from "./assets/room1.jpg";
// import room2Img from "./assets/room2.jpg";
// import room3Img from "./assets/room3.jpg";
// import room4Img from "./assets/room4.jpg";
import Spaces from "./components/Spaces";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Spaces space="Our Room"/>
    </>
  );
}

export default App;
