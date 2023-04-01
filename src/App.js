import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/TaxiFareCalculator" element={<Home />} />
        <Route
          path="*"
          element={<h1 style={{ margin: 80 }}>404 Not Found</h1>}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
