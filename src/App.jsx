import { UpdateFollower } from "react-mouse-follower";
import Navbar from "./components/Navbar/Navbar.";
import Hero from "./components/Hero/Hero";
import Services from "./components/Service/Services";
import Banner from "./components/Banner/Banner";
const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        className="sample"
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 9999,
          followSpeed: 1.2,
        }}
      >
        <Navbar />
        <Hero />
      </UpdateFollower>
      <UpdateFollower
        className="sample"
        mouseOptions={{
          backgroundColor: "black",
          zIndex: 9999,
          followSpeed: 1.2,
        }}
      >
        
        <Services/>
        <Banner/>
      </UpdateFollower>
    </main>
  );
};

export default App;
