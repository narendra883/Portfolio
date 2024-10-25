
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Timeline from "./components/Timelin";


const App=()=>{
  return(
    <div>
      <Navbar/>
      <Home/>
      <Timeline/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App;