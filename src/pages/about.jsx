import { useState } from "react";
import "./about.css";


function About(){
    const [showEmail, setShowEmail] = useState(false);


    function showInfo(){
        setShowEmail(!showEmail);
      }

    return(
        <div className="about page">
            <h1>Brandon Merle</h1>

            { showEmail 
            ? <h5>brandon.merle@yahoo.com</h5>  
            : <p>Click the button below to see my email.</p> 
            }
            
            <button className= "btn btn-outline-dark" onClick={showInfo}>
                {
                    showEmail
                    ?"Hide email"
                    :"Show my email"
                }
            </button>
        </div>
    );

}

export default About;
