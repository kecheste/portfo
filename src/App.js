import "./App.css";
import {
  NavBar,
  Banner,
  Projects,
  Contact,
  Footer,
  Stack,
  Experience,
} from "./components";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <NavBar />
          <Banner />
        </div>
        <Projects />
        <Experience />
        <Stack />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
