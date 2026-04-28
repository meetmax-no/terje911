import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Models from "@/components/Models";
import FamousOwners from "@/components/FamousOwners";
import LeMans from "@/components/LeMans";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="App relative">
      <Navbar />
      <Hero />
      <History />
      <Models />
      <FamousOwners />
      <LeMans />
      <Contact />
      <Footer />
    </main>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            border: "1px solid #0a0a0a",
            borderRadius: "4px",
          },
        }}
      />
    </>
  );
}

export default App;
