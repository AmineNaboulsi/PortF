import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import { BlurFade } from "@/components/magicui/blur-fade";
import FloatingBar from "@/components/FloatingBar";

export default function App() {
  return (
    <Router>
      <BlurFade>
            <Header />
      </BlurFade>
      <main className="p-6 max-w-5xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
      <FloatingBar />
    </Router>
  );
}
