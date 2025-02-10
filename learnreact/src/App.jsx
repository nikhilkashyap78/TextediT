import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import React, { useState } from 'react';
import Alert from "./components/Alert.jsx";
import { use } from "react";

// import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";


function App() {
     
  const [mode, setMode] = useState('light'); //weather dark mode is enabled or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
         setAlert(null)
      }, 2000);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = "#00002a";
      showAlert("Dark mode have been enabled", "success" )
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light mode have been enabled", "success" )
    }
  }

// const router = createBrowserRouter([
//   {
//     path:"/Home",
//     element:<><Navbar /><Home/></>
//   },
//   {
//     path:"/About",
//     element:<><Navbar /><About/></>
//   },
// ])


  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="TextediT" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <div className="container my-5">
       <Home showAlert={showAlert} Home heading="Enter the text to analyze" mode={mode}/>
       {/* <Routes>
        <Route path="/TextediT" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
       </Routes> */}
      </div>
    {/* </BrowserRouter> */}
    </>
    
  );
}

export default App;
