import { UpdateFollower } from "react-mouse-follower";
import Navbar from "./components/Navbar/Navbar.";
import Hero from "./components/Hero/Hero";
import Services from "./components/Service/Services";
import Banner from "./components/Banner/Banner";
import BannerText from "./components/Banner/BannerText";
import Blogs from "./components/Blogs/Blogs";
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
        <BannerText/>
        <Blogs/>
      </UpdateFollower>
    </main>
  );
};

export default App;
