import { Button } from "bootstrap";
import Product from "../components/product";
import "./catalog.css"

const catalog = [
  {
    "title": "Blackbird 5ft 4in",
    "image": "/images/5-4.webp",
    "price": "699.99",
    "category": "shortboards",
    "_id": "S001"
  }, 
  {
    "title": "Cordell 5ft 6in",
    "image": "/images/5-6.webp",
    "price": "659.90",
    "category": "shortboards",
    "_id": "S002"
  },
  {
    "title": "Big Kahuna 9ft 6in",
    "image": "images/9-6.webp",
    "price": "1350.00",
    "category": "longboards",
    "_id": "L001"
  },
  {
    "title": "The Log 9ft 11in",
    "image": "images/9-11.webp",
    "price": "859.90",
    "category": "longboards",
    "_id": "L002"
  },
  {
    "title": "Lost 6ft 4in",
    "image": "images/lost-the-driver6-4.webp",
    "price": "799.99",
    "category": "shortboards",
    "_id": "S003"
  },
  {
    "title": "Modern Blackbird 8ft",
    "image": "images/modern-backbird8.webp",
    "price": "489.99",
    "category": "funboards",
    "_id": "F001"
  },
  {
    "title": "Rat Indust. 6ft 3in",
    "image": "images/rat-wifi-plus6-3.webp",
    "price": "649.99",
    "category": "thrusters",
    "_id": "T001"
  },
  {
    "title": "Richie Collins 6ft 3in",
    "image": "images/richie-collins-twin6-3.webp",
    "price": "489.99",
    "category": "thruster",
    "_id": "T002"
  },
  {
    "title": "Roar Glider 10ft",
    "image": "images/roar-glider10.webp",
    "price": "999.99",
    "category": "longboard",
    "_id": "L003"
  },
  {
    "title": "TJ Pro 9ft",
    "image": "images/Taylor-jensen-tj-pro_9.webp",
    "price": "889.99",
    "category": "longboard",
    "_id": "L004"
  }

];

const categories = ["shortboards", "longboards", "thrusters", "funboards"];

  

function Catalog() {
  return (
    <div className="catalog page">
      <h1>Welcome to our online Quiver</h1>

      <div className='filters'>
        {categories.map(cat => <button className= "btn btn-small btn-outline-info" >{cat}</button>)}
      </div>
      {catalog.map(prod => <Product data={prod}/>)}  
      

    </div>
  );
}

export default Catalog;