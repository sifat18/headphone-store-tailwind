import { UpdateFollower } from "react-mouse-follower";
import Navbar from "./components/Navbar/Navbar.";
import Hero from "./components/Hero/Hero";
import Services from "./components/Service/Services";
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
        <Services/>
    </main>
  );
};

export default App;
