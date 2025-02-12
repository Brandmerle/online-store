import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/Catalog';
import About from './pages/about';
import Admin from './pages/admin';
import Home from './pages/home';
import Cart from './pages/cart';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home"element={<Home></Home>}></Route>
        <Route path="/catalog" element={<Catalog/>}></Route>
        <Route path="/admin" element={ <Admin />}></Route>
        <Route path="/about"element={<About></About>}></Route>  
        <Route path="/cart" element={<Cart/>}></Route>   
      </Routes>

      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
