import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App-header'>
        <NavBar />
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
