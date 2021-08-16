import React from 'react'
import './Hme.css'
import {useHistory} from 'react-router-dom'
import zay from './Amoah.jpeg'
import qay from './Ewura Ama.jpeg'
import pay from './phile.jpg'
import ig from './ig.png'
import twitter from './twitter.png'
import youtube from './youtube.png'



function Hme() {
    let history=useHistory()


    function Login() {

        history.push
        ('/Login')
        
    }
    
    function Signup() {

        history.push
        ('/Signup')
        
    }

    return (
        <div>
            
            <div className="ts">

            <div className="ts1">
                <div className="ts1a" >
                    <div className="a">
                        <h3 className="logot">Thesaurus</h3>
                    </div>
                    <div className="b" >

                        <div className="b1"></div>
                        <div className="b2">
                            {/* <button className="bbtn">About</button> */}
                            <button className="bbtn">Donate</button>
                            <button className="bbtn" onClick={Login} >Login</button>
                            <button className="bbtm" onClick={Signup} >Sign up</button>
                           

                        </div>

                    </div>
                </div>

                <div className="ts1b" >
                     
                     <div className="c">

                         <h1 className="pr">Learn At Your <br/> Own Pace</h1>
                         <p className="pre" >Prepare for an examination, acquire new skills
                           <br/>  and improve on your academics with <br/> selfless volunteers.
                         </p>


                     </div>

                     <div className="d">

                     

                         <button className="amo" >

                             <p>Donate to support</p>
                         </button>

                         <button className="amoh" >

                             <p>Volunteer as a tutor</p>
                         </button>


                        

                        



                     </div>

                </div>
            </div>


            <div className="ts2" >

                <div className="govv" >
                    <div className="govt" >
                        <div className="gopic" >
                            <img src={qay} className="gopic" />


                        </div>
                    </div>
                    <div className="govd" >
                        <h2>Ewura Ama Etruwaa Sam</h2>
                        <h4>CEO and Senior Governor</h4>
                        <br/>
                        <h5>Founder of High Hills Incorporated <br/> 
                          Head of overall activities and programmes
                          </h5>
                    </div>
                </div>


                <div className="govv" >
                <div className="govt" >
                <div className="gopic" >
                <img src={zay} className="gopic" />


                </div>
                </div>
                    <div className="govd" >
                        <h2>Amoah Sarfo Kwarteng</h2>
                        <h4>1st Advisor and 2nd Governor</h4>
                        <br/>
                        <h5>Head of finance and administration
                         
                          </h5>
                    </div>
                </div>


                <div className="govv" >
                <div className="govt" >
                <div className="gopic" >
                <img src={pay} className="gopic" />


                </div>
                </div>
                    <div className="govd" >
                        <h2>Philemon Bobie Mensah</h2>
                        <h4>2nd Advisor and 3rd Governor</h4>
                        <br/>
                        <h5>
                            Head of communication and public relations
                          </h5>
                    </div>
                </div>
                



            </div>


            <div className="ts3" >
                <div className="ts3a">
                    <button className="ts3b">About Us</button>
                    <button className="ts3b">Send a donation</button>
                    <button className="ts3b">Partner with us</button>

                </div>


                <div className="ts3a">

                    <input type="text" placeholder="Subscribe for email updates" className="plh" />
                    <button className="ts3bb">Subscribe</button>
                </div>


                <div className="ts3a">
                <button className="ts3b">Volunteer as a tutor</button>
                    <button className="ts3b">Join as a student</button>
                    <button className="ts3b">Request a material</button>
                </div>


                <div className="ts3a">
                    <button className="ts3b">Terms and Conditions</button>
                    <button className="ts3b">Report Abuse</button>
                    <button className="ts3b"></button>
                </div>


                <div className="ts3a1">

                    <div className="social"  >
                        <img src={ig} className="social" />
                    </div>

                    
                    <div className="social"  >
                        <img src={twitter} className="social" />
                    </div>

                    
                    <div className="social"  >
                        <img src={youtube} className="social" />
                    </div>
                   
                    


                </div>
                
            </div>

            </div>
           


        </div>
    )
}

export default Hme
