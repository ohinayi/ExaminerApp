import Navbar from "./component/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Student from "./component/Student";
import {AdminSign} from "./component/AdminSign";
import {Admin} from "./component/admin";
import "./app.css";
import DeletePage from "./component/deletePage";



  function App() {
    return (
      <div className="App">
        <Router>
         <Navbar />
            <Routes>
                <Route exact path="/" Component={Home}/>
                <Route exact path="/contact" Component={Contact}/>
                <Route exact path="/about" Component={About}/>
                <Route exact path="/student" Component={Student}/>
                <Route exact path="/adminSign" Component={AdminSign}/>
                <Route exact path="/admin" Component={Admin}/>
                <Route exact path="/deletePage" Component={DeletePage}/>
           </Routes>      
       </Router>
        
      
            
        
       
       </div>
        
      
      
    )
  }
  export default App