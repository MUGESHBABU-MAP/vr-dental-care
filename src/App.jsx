import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./pages/Contact";

function ScrollToHashOrTop() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    // Small timeout to allow route content to render
    const t = setTimeout(() => {
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);

    return () => clearTimeout(t);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ScrollToHashOrTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />

          {/* Redirect any unknown route to Home (ensures default to Home on initial load) */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
