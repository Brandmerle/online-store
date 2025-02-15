import { useState } from 'react';
import DataContext from "./dataContext";

function GlobalProvider(props) {
    const [cart, setCart] = useState ([]);
    const [user, setUser] = useState ({name: "Brandon"});


    function addProductToCart () {

    }

    function removeProductFromCart() {

    }

    function clearCart() {

    }


    return(
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addProducttoart: addProductToCart,
            removeProductFromCart: removeProductFromCart,
            clearCart: clearCart,
        }}>
            (={props.children})
        </DataContext.Provider>
    );
}

export default GlobalProvider;