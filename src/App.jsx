import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import CartPage from './pages/Cart/CartPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App
