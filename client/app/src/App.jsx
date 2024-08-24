import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Birds from "./Pages/Birds";
import Climbs from "./Pages/Climbs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/climbs" element={<Climbs />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
