import { useState } from "react";
import "./quantityPicker.css";

function QuantityPicker(props){
    const [quantity, setQuantity] = useState (1);

    function decrease(){
        if(quantity==1) return;
        const value = quantity -1;
        setQuantity(value);
        props.onChange(value);
    }

    function increase(){
        const value = quantity +1;
        setQuantity(value);
        props.onChange(value);
    }

    return(
        <div className="qt-picker">
            
            <button className='btn btn-sm btn-info' disabled={quantity ==1} onClick={decrease}> - </button>
            <label>{quantity}</label>
            <button className='btn btn-sm btn-info' onClick={increase}> + </button>

        </div>
    )

}

export default QuantityPicker;

