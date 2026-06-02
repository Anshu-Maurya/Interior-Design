import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio"
import Team from "./pages/Team"
import Service from "./pages/Service"
import Blog from "./pages/Blog"
import Header from './components/Header'
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/service" element={<Service />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
