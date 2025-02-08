import './navbar.css';



function Navbar(){
    return(
        <div>
            <nav>
                <div className="navbar-menu">
                    <span className='title'>The Boardroom</span>
                    <a href="">Log In</a>
                    <a href="">Search</a>
                    <a href="">Subscribe</a>
                    <a href="">Menu</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;