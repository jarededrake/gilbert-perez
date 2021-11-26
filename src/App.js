import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import ContactUsPage from "./components/ContactUsPage";
import QuotePage from "./components/QuotePage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Switch,
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='quote' element={<QuotePage />} />
        <Route path='contact' element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
