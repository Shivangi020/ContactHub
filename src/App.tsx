import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Contact from "./Pages/Contact";
import Chart from "./Pages/Chart";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
        <Route path="/" element={<Contact/>}/>
        <Route path ='/charts' element={<Chart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
