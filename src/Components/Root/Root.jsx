import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(120vh-232px)]">
        <Outlet></Outlet>
        <Footer />
      </div>

    </>
  );
}
