import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home title="first" />
      <Home title="second" />
      <Footer />
    </div>
  );
}

export default App;
