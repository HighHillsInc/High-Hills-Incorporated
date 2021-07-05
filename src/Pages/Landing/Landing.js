import React from 'react'
import './Landing.css'
import { useHistory, Link } from 'react-router-dom'
import yea from './logo-hhi.jpeg'

function Landing() {

    let history =useHistory()

    function Login () {
        history.push('/Login')
        
    }

    // function Signup() {
    //     history.push('/Signup')
        
    // }
    return (
        <div className="main">

            <div className="logo">
            
                <div className="imgg">
                <img src={yea} className="img" />
                </div>


            </div>
            <div className="act">
              
              <button className="but" onClick={Login}>Login</button>

              <Link to ="/Signup">

              <p className="link" >Sign up</p>
              
              </Link>

              
              <Link to ="/About">

              <p className="link" >Meet the developer</p>
              
              </Link>
              

            </div>
            
        </div>
    )
}

export default Landing
