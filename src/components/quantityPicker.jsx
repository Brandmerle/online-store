import { useState } from "react";
import "./quantityPicker.css";

function QuantityPicker(){
    const [quantity, setQuantity] = useState (1);

    function decrease(){
        if(quantity==1) return;
        const value = quantity -1;
        setQuantity(value);
        
    }

    function increase(){
        const value = quantity +1;
        setQuantity(value);
    }

    return(
        <div className="qt-picker">
            
            <button className='btn btn-sm btn-success' disabled={quantity ==1} onClick={decrease}> - </button>
            <label>{quantity}</label>
            <button className='btn btn-sm btn-success' onClick={increase}> + </button>

        </div>
    )

}

export default QuantityPicker;

