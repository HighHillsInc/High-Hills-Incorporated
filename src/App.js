import {Route,Switch} from 'react-router-dom'
// import Landing from './Pages/Landing/Landing'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import Hme from './Pages/Hme/Hme'

function App() {
  return (
    
<Switch>

<Route exact path='/' component={Hme}/>

  {/* <Route exact path='/' component={Home}/> */}
{/* 
<Route exact path='/' component={Landing} /> */}
<Route exact path='/Login' component={Login} />
<Route exact path='/Signup' component={Signup} />
<Route exact path='/About' component={About} />

</Switch>

     
   
  )
}

export default App;
