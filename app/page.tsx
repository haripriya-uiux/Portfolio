import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Collaborate from "./components/Collaborate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black">
      <Navbar />
      <Hero />
      <Projects />
      <Collaborate />
      <Footer />
    </div>
  );
}
