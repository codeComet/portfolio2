import { Footer, Navbar, VerticalSlider } from "./components";

function App() {
  return (
    <div className="App bg-primary">
      <Navbar />
      {/* <VerticalSlider /> */}
      <div className="w-full px-4 lg:px-16 rounded absolute bottom-4 lg:bottom-8 left-0 right-0 ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
