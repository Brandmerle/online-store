import "./product.css"
import QuantityPicker from "./quantityPicker";

function Product(props) {
  function add(){
    console.log("clicked");
  }

  return (
    <div className="product">

      <img src={props.data.image} alt=""></img>

      <h4>{props.data.title}</h4>

      <label>{props.data.price}</label>

      <div className="controls">
      
      <QuantityPicker></QuantityPicker>

      <button onClick={add} className="btn btn-sm btn-dark">Add</button>
      </div> 
    </div>
  );
}

export default Product;