import { Footer, Navbar } from "./components";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <div className="h-full flex flex-col bg-primary">
      {/* <CustomCursor /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about/:child" element={<About />} />
        <Route path="/about/" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
