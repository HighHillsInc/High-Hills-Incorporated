import React from 'react'
import './Home.css'
import { useHistory, Link } from 'react-router-dom'
import yy from './hhi logo.png'


function Home() {

    let history = useHistory()

    function Login () {
        history.push('./Login')
        
    }

    function Signup () {
        history.push('./Signup')
        
    }


    return (
        <div className="ma">
            
            <div className="ma1">

                {/* <div className="ma1a">
                   
               </div> */}

               <div className="ma1a" >

               

<div className="meet">
<img src={yy} className="lg" />



<button className="btnh">About Us</button>
{/* <button className="btnh">The Governors</button>
<button className="btnh">The Community</button> */}
</div>
<div className="join">

<button className="btnh" onClick={Login}>Login</button>
<button className="btnj" onClick={Signup} >Signup</button>



</div>

               </div>


               <div className="ma1b">
{/* 
                   <p className="bie" >
                       
                        Are you in need of a tutor to help <br/> with your studies?
                        <br/>
                        Would you love to volunteer to teach
                        <br/>
                         students and individuals?
                        
                        </p> */}
{/* 
                   <button className="nie" >saas</button> */}
                   
                   
               </div>


            </div>



            <div className="ma2">
{/*              
             <div className="gv">
                 <p className="gov">Ewura Ama Etruwaa Sam <br/>Developer and Senior <br/> Governor
                 </p>
             </div>
             <div className="gv1">
             <p className="gov">Amoah Sarfo Kwarteng <br/>First Advisor and Financial <br/> Secretary
                 </p>
             </div>
             <div className="gv2">
             <p className="gov">Philemon Bobie Mensah <br/>Second Advisor and Head of Communication
                 </p>
             </div> */}
            </div>

{/* 

            <div className="ma3">
                <div className="ma3a">
              



                </div>
                <div className="ma3b"></div>
            </div> */}

        </div>
    )
}

export default Home



