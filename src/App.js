import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import ContactUsPage from "./components/ContactUsPage";
import QuotePage from "./components/QuotePage";
import AboutPage from "./components/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FaqPage from "./components/FaqPage";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="quote" element={<QuotePage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="faq" element={<FaqPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
