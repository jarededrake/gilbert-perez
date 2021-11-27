import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import QuotePage from "./components/QuotePage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <NavBar />
      {/* <HomePage /> */}
      <QuotePage/>
      <Footer />
    </div>
  );
}

export default App;
