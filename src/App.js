import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/Catalog';
import About from './pages/about';
import Admin from './pages/admin';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Catalog></Catalog>
      <About></About>
      <Admin />

      <Footer></Footer>
    </div>
  );
}

export default App;
