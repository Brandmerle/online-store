import { useContext } from 'react';
import './cart.css';

import { Link } from 'react-router-dom';
import DataContext from '../state/dataContext';


function Cart(){

    let cart = useContext(DataContext).cart;

    function calculateNumProds(){
        let sum = 0;
        for(let i=0; i<cart.length; i++){
            let prod = cart[i];
            sum += prod.quantity;
        }

        return sum;
    }
    return(
        <div className="cart page">
            <h1>Ready to complete the order?</h1>

            <h3>You have {calculateNumProds()} products in your cart</h3>
            
        </div>
    );
}

export default Cart;