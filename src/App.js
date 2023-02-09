import './App.css';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <nav className="navigation">
        <Header />
        <Navigation />
      </nav>
      <main className="main-page">
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

