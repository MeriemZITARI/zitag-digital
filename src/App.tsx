import  Home  from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import ContactSection from "./components/ContactSection";
import Projects from "./components/Projects";
import Footer from "./components/Footer"



function App() {

 
  return (
    <div>
        <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
        
      </div>
      <div>
      <About />
      </div>
      <div className="p-5 md:px-[15%]">
      <Services />
      </ div>
      <div>
      <Projects/>
      </div>
      <div>
      <ContactSection/>
      </div>
      <div>
        <Footer/>
      </div>
     
      
   </div>

   
  );
}

export default App;