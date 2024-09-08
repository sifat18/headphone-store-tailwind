import { UpdateFollower } from "react-mouse-follower";
import Navbar from "./components/Navbar/Navbar.";
const App = () => {
  return <main className="overflow-x-hidden">
    <UpdateFollower
      className="sample"
      mouseOptions={{
        backgroundColor: 'white',
        zIndex: 9999,
        followSpeed: 1.2,
      }}
    >
    <Navbar/>

    </UpdateFollower>
  </main>;
};

export default App;
