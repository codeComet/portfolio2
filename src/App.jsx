import { Footer, Navbar, VerticalSlider } from "./components";
import Home from "./pages/Home";

function App() {
  return (
    <div className="h-full flex flex-col justify-between bg-primary">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
