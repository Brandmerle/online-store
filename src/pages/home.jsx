import "./home.css"
import { Link } from 'react-router-dom';

function Home() {
    return (
    <div className="home page">
        <img className="homeImage" src="./images/Brisick-Surfing-Selfie.webp" alt="" />
        
        <div className="info">
            <h4>The Boardroom</h4>
            <h6>Purveyors of fine wave riding vehicles</h6>
        </div> 

        <div className="controls">
           <Link className='btn btn-success'to="./catalog">Check out our Catalog!</Link>
        </div>
     </div>
    );
}

export default Home;
