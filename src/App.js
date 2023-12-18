import React from "react";
import TopBar from "./Component/NavBar/TopBar";
import HomePage from "./Pages/HomePage";
import { Routes,Route } from "react-router-dom";
import DetailMail from "./Component/Emails/DetailMail";
import LeftBar from "./Component/NavBar/LeftBar";

function App() {
  return (
    <>
    <TopBar/>
    <LeftBar/>
    <Routes>
    <Route path="/" element={<HomePage/> } />
    <Route path="/mails/:id" element={<DetailMail/>}/>
 </Routes>

 </>
    
    );
}

export default App;
