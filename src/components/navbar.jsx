import './navbar.css';

import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div>
            <nav>
                <div className="navbar-menu">
                    <span className='title'>The Boardroom</span>
                        
                    <Link to="./home">Home</Link>
                    <Link to="./catalog">Catalog</Link>
                    <Link to="./about">About Us</Link>
                    <Link to="./admin">Admin</Link>    
                    <Link className="end" to="./cart">View Cart</Link>
                        
                </div>
            </nav>
        </div>
    );
}

export default Navbar;