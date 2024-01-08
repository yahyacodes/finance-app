import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import Income from "./Components/Income";
import Expenses from "./Components/Expenses";
import Savings from "./Components/Savings";

function App() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/1 md:w-1/1 lg:w-3/12 xl:w-3/12">
          <Sidebar />
        </div>

        <div className="w-full sm:w-1/1 md:w-1/1 mx-auto lg:w-8/12 xl:w-8/12">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/savings" element={<Savings />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
