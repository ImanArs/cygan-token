import { First } from "./components/First";
import { Five } from "./components/Five";
import { Footer } from "./components/Footer";
import { Fourth } from "./components/Fourth";
import { Header } from "./components/Header";
import { Second } from "./components/Second";
import { Third } from "./components/Third";

function App() {
  return (
    <div>
      <Header />
      <First />
      <div className="h-1 bg-black w-full" />
      <Second />
      <div className="h-1 bg-black w-full" />
      <Third />
      <div className="h-1 bg-black w-full" />
      <Fourth />
      <div className="h-1 bg-black w-full" />
      <Five />
      <div className="h-1 bg-black w-full" />
      <Footer />
    </div>
  );
}

export default App;
