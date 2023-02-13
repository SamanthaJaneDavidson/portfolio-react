import React, { useState } from 'react';
// import '../styles/App.css';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
// import ProjectCard from "./components/ProjectCard";
import Projects from "./components/Projects"

function App() {

  const [currentPage, setCurrentPage] = useState('AboutMe')

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Projects') {
      return <Projects />
    }
    if (currentPage === 'Resume') {
      return <Resume />
    }
      return <AboutMe />
  };


  const handlePageChange = (page) => setCurrentPage(page);
  return (
  <div className="container">
    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    <Header currentPage={currentPage} handlePageChange={handlePageChange} />
    <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}
  </div>
  )
};

export default App;

