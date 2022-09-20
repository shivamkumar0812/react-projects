import './App.css';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './component/Navbar';
import About from './component/About';
import Home from './component/Home';
import Signup from './component/Signup';
class App extends Component {
  render() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>


    </>

  );
}
}

export default App;
