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
      <div className="relative z-0 texture">
        <NavBar />
        <Banner />
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
