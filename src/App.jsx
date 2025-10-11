import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewsLetter from './components/NewsLetter';
import Contact from './pages/Contact';
import About from './pages/About';
import Service from './pages/Services/Service';
import TeamDetails from './pages/TeamDetails';
import ProjectDetails from './pages/ProjectDetails';
import ProjectManagement from './pages/Services/ProjectManagement';
import PreDesign from "./pages/Services/PreDesignActivity";
import ConstructionImplementation from "./pages/Services/ConstructionImplementation";
import SpecializedConstruction from "./pages/Services/SpecializedConstruction";
import Projects from './pages/Projects';
const App = () => {
  return (
    <Router>
      <Navbar />
       <Routes>
        <Route path="/" element={<Home pageTitle="Home" />} />
        <Route path="/about" element={<About pageTitle="About" />} />
        <Route path="/service" element={<Service pageTitle="Service" />} />
        <Route path="/services/project-management" element={<ProjectManagement />} />
        <Route path="/services/pre-design" element={<PreDesign />} />
        <Route
          path="/services/construction-implementation"
          element={<ConstructionImplementation />}
        />
        <Route
          path="/services/specialized-construction"
          element={<SpecializedConstruction />}
        />
        <Route path="/project/:slug" element={<Projects pageTitle="Projects" />} />
        <Route path="/project-details/:slug/:id" element={<ProjectDetails pageTitle="Project Details" />} />
        <Route path="/team/:id" element={<TeamDetails pageTitle="Team Details" />} />
        <Route path="/contact" element={<Contact pageTitle="Contact" />} />
        </Routes>
        <NewsLetter />
      <Footer />
    </Router>
  )
}

export default App