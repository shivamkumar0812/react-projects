import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import { useState} from "react";
import Alert from "./component/Alert";
import About from "./component/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const settingAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1d3c5a';
      settingAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      settingAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="AboutUs"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path='/about' element={<About mode={mode} />} />
            <Route exact path='/' element={<Textform mode={mode} settingAlert={settingAlert} />} />
          </Routes>
        </div>
      </Router>
      {/* <About/> */}
    </>
  );
}

export default App;
