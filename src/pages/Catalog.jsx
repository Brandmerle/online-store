import { Button } from "bootstrap";
import Product from "../components/product";
import "./catalog.css"

const catalog = [
  {
    "title": "Blackbird 5ft 4in",
    "image": "/images/5-4.webp",
    "price": 199.99,
    "category": "shortboard",
    "_id": "S001"
  }, 
  {
    "title": "Cordell 5ft 6in",
    "image": "/images/5-6.webp",
    "price": 259.900,
    "category": "shortboard",
    "_id": "S002"
  },
  {
    "title": "Big Kahuna 9ft 6in",
    "image": "images/9-6.webp",
    "price": 350.00,
    "category": "longboard",
    "_id": "L001"
  },
  {
    "title": "The Log 9ft 11in",
    "image": "images/9-11.webp",
    "price": 459.90,
    "category": "longboard",
    "_id": "L002"
  }

];

const categories = ["shortboards", "longboards", "thrusters", "funboards"];

  

function Catalog() {
  return (
    <div className="catalog page">
      <h1>Check out our new products.</h1>

      <div className='filters'>
        {categories.map(cat => <button className= "btn btn-small btn-outline-success" >{cat}</button>)}
      </div>
      {catalog.map(prod => <Product data={prod}/>)}  
      

    </div>
  );
}

export default Catalog;