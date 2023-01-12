import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Background from "./components/Background.js";
import { Skills } from './components/Skills'
import { Experience } from './components/Experience';


function App() {
  return (
    <div className="App">
      <Background />
      <NavBar />
      <Banner />
      <Experience /> 
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
