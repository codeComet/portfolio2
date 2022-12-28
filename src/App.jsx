import { Footer, Navbar, VerticalSlider } from "./components";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";

function App() {
  return (
    <div className="h-full flex flex-col justify-between bg-primary">
      {/* <CustomCursor /> */}
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
