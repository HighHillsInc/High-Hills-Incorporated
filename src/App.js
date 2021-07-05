import {Route,Switch} from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import About from './Pages/About/About'

function App() {
  return (
    
<Switch>

<Route exact path='/' component={Landing} />
<Route exact path='/Login' component={Login} />
<Route exact path='/Signup' component={Signup} />
<Route exact path='/About' component={About} />

</Switch>

     
   
  )
}

export default App;
