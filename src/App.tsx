import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Corty } from "./pages/corty";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <Router basename="/">
        <div className="min-h-screen bg-black">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <HomePage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Header />
                  <About />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Header />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route
              path="/corty"
              element={
                <>
                  <Header />
                  <Corty />
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
