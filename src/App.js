import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { HashRouter as Router,Routes, Route } from 'react-router'


function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Router>
          <Header />
          <LandingSection />
          <Routes>
            <Route path="/projects/" element={<ProjectsSection />} />
            <Route path="/Contact/" element={<ContactMeSection />}/>
          
          </Routes>
          <Footer />
          <Alert />
          </Router>
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
