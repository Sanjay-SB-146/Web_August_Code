import React from "react";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

function App(){

  return(
    <BrowserRouter>
       <Navbar />

       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={ <Dashboard />} />
          <Route path="profile" element={ <Profile />} />
       </Routes>

       

    </BrowserRouter>
  )
}

export default App