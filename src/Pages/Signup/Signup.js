import React from 'react'
import './Signup.css'
import ny from "./Learning-pana.png"
import { useHistory } from 'react-router-dom'


function Signup() {

    
    let history=useHistory()
    function Enter() {

     history.push('/Login')
        
    }
    return (


        <div className="main3">




           
            <p className="wlcm" >Sign up here</p>

            <input type="text" placeholder="Username" className="ipf"></input>
            <input type="text" placeholder="Email" className="ipf"></input>
            <input type="text" placeholder="Phone Number" className="ipf"></input>
            <input type="password" placeholder="Password" className="ipf"></input>
            <input type="password" placeholder="Confirm Password" className="ipf"></input>
            <button className="btnn" onClick={Enter}  >Signup</button>


           
            
        </div>
    )
}

export default Signup
