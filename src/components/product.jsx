import "./product.css"
import QuantityPicker from "./quantityPicker";

function Product() {
  return (
    <div className="product">

      <img src="https://picsum.photos/280/200" alt=""></img>

      <h4>product title here</h4>
      
      <QuantityPicker></QuantityPicker>
        
    </div>
  );
}

export default Product;