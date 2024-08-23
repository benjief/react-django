import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate
} from 'react-router-dom'
import Home from './Pages/Home';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
