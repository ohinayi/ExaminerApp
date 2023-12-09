import React,{ useState} from "react";
import './admindesign.css';
import { useNavigate } from "react-router-dom"; 
import {auth} from '../config/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';

//main function that will do the authentication stuff.
export const AdminSign = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // i am saving some detail of the admin that i want to give acess'
    const AllowedUser = {
        email: 'ohi@gmail.com',
        password: '123456',
      };

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('sucess breavo');
              // Check if the logged-in user matches the allowed user
      if (auth.currentUser && auth.currentUser.email === AllowedUser.email) {
        console.log('Login successful');
        navigate("/admin");
        // Perform actions for the allowed user
      } else {
        console.log('error')
        // Log the user out if the login attempt is unauthorized
        await auth.signOut();
      }
        }
        catch (error){
            const errorCode=error.code;
            const errorMessage=error.message;
            console.error(`Firebase Error  (${errorCode}):${errorMessage}`)
        }
     
    };
    return(
        <div style={{}} id="design">
           <div id="one">
            <h3>Email</h3>
            <div className="ui icon input" id="input">
            <input type="email" placeholder="Enter your email"  
            onChange={(event) => setEmail(event.target.value)} />
            <i className="ui mail icon"></i>
           
            </div>
            <h3>Password</h3>
            <div className="ui icon input" id="input">
            <input type="password" placeholder="Enter your password" id="password"
            onChange={(event) => setPassword(event.target.value)} />
            <i className="ui lock icon"></i>
            </div>
            <p/>
            <button className="ui big button" id="but" onClick={signIn}>login</button>
            </div>     
        </div>
    )
};