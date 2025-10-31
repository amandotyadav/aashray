import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
