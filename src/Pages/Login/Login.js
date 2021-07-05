import React from 'react'
import './Login.css'
import {useHistory, Link} from 'react-router-dom'
import ys from "./Online learning-rafiki.png"

function Login() {


    function login() {
        
        
    }

    return (
        <div className="main2">

            <div className="sidea">

                <img src={ys} className="img2" />

            </div>
            <div className="sideb">
                
            <p className="wlcm" >Welcome back!</p>

<input type="text" placeholder="Username" className="ipf"></input>
<input type="password" placeholder="Password" className="ipf"></input>
<button className="btn" onClick={login} >Login</button>
<Link to ="./Signup" className="lnk1">
Don't have an account? Get one for free.
</Link>

<Link className="lnk">
Forgot password?
</Link>
            </div>




            
        </div>
    )
}

export default Login
