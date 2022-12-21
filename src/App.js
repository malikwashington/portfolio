import './App.css';
import Nav from './nav/Nav.jsx'
import { Route, Routes } from 'react-router-dom';
import Projects from './screens/Projects';
import Home from './screens/Home';
import About from './screens/About';
import Resume from './screens/Resume';
import Contact from './screens/Contact';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
    </>
  );
}

export default App;
