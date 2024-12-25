import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Contact  from "./components/Contact";
import HomePage from "./pages/HomePage";
import Work from "./components/Work";
import Education from "./components/Education";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;
