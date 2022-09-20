import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_API_KEY;
  const [progress, setProgress] = useState(0);



    return (
      <>
        <div>
          <BrowserRouter>
            <Navbar title="Thetechnicaltown" />
            <LoadingBar
              color='grey'
              height={3}
              progress={progress}
            />
            <Routes>
              <Route exact path="/" element={<News apiKey={apiKey}   key="bussiness" pageSize={pageSize} country="in" category="general" />}></Route>
              <Route exact path="/bussiness" element={<News apiKey={apiKey}  key="bussiness" pageSize={pageSize} country="in" category="bussiness" />}></Route>
              <Route exact path="/entertainment" element={<News apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}></Route>
              <Route exact path="/sports" element={<News apiKey={apiKey}  key="sports" pageSize={pageSize} country="in" category="sports" />}></Route>
              <Route exact path="/health" element={<News apiKey={apiKey}  key="health" pageSize={pageSize} country="in" category="health" />}></Route>
              <Route exact path="/science" element={<News apiKey={apiKey}  key="science" pageSize={pageSize} country="in" category="science" />}></Route>
              <Route exact path="/technology" element={<News apiKey={apiKey}  key="technology" pageSize={pageSize} country="in" category="technology" />}></Route>
            </Routes>
          </BrowserRouter>,
        </div>
      </>
    );
  
}


export default App;
