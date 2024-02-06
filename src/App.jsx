import { Hero } from "./components";
import { Header } from "./components";
import { Feature } from "./components";
import { Footer } from "./components";

const App = () => {
  return (
    <div className="h-screen mx-auto mb-10 bg-slate-800">
      <Header />
      <Hero />
      <Feature />
      <Footer />
    </div>
  );
};

export default App;
