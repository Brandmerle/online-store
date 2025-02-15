import { createContext } from 'react';

/**
 * its a promise of the data structure
 * inteface
 * blueprint
 */
const DataContext = createContext({
    cart: [],
    user: {},

    addProductToCart: () => {},
    removeProductFromCart: () => {},
    clearCart: () => {},
});


export default DataContext;