import React,{} from "react";
import './Home.css';
import { Link } from "react-router-dom";


function Home () {
    return(
        <div id="main" style={{}}>
            <div id="two">
                <h2>Sign in as:</h2>
                <Link to='/student'>
                    <button className="button">User</button>
                </Link><p />
                <Link to='/adminSign'>
                    <button className="button">Admin</button>
                </Link>
                
            </div>
        </div>
    )
};

export default Home;