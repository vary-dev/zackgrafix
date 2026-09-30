import { useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CursorHalo from "./components/CursorHalo";
import Hero from "./sections/Hero";
import LandingSections from "./sections/LandingSections";
import Join from "./pages/Join";

function Home() {
  return (
    <>
      <Hero />
      <LandingSections />
    </>
  );
}

export default function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-canvas"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route
            path="*"
            element={
              <div className="px-5 py-20 text-center">
                <h1 className="font-heading text-3xl font-semibold">Page not found</h1>
                <Link to="/" className="mt-5 inline-block underline">
                  Return home
                </Link>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
      <CursorHalo />
    </>
  );
}