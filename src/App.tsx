import { BrowserRouter } from "react-router-dom";
import AOS from "aos";

import { Router } from "../Router";

import "./styles/main.sass";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
