import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center">
        <div className="w-full">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
