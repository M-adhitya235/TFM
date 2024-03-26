import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const LayoutAdmin = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          <div className="min-w-min">
            <Sidebar />
          </div>
          <div className="flex-1 bg-gray-100">
            <main className="p-6">{children}</main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LayoutAdmin;
