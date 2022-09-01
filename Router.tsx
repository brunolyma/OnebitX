import { Route, Routes } from "react-router-dom";

import { Home } from "./src/pages/Home";
import { Falcon9 } from "./src/pages/Falcon9";
import { HumanFlight } from "./src/pages/HumanFlight";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="humanflight" element={<HumanFlight />} />
      <Route path="falcon9" element={<Falcon9 />} />
    </Routes>
  );
}
