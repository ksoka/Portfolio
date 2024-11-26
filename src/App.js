import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Frontpage from './Components/Frontpage';
import Jobs from './Components/Jobs';
import Hobbies from './Components/Hobbies';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="contentBox">
          <Routes>
              <Route path="/" element={<Frontpage />} />
              <Route path="/Jobs" element={<Jobs />} />
              <Route path="/Hobbies" element={<Hobbies />} />
              <Route path="/Contact" element={<Contact />} />
          </Routes>
        {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
