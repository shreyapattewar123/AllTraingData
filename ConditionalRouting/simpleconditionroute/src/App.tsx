import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route,Link,Navigate, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'




function App() {

  const NavigateButton:React.FC=()=>{
    const navigate=useNavigate();
    const goToDashboard=()=>{
      navigate('/dashboard')
      
    };
    return <button onClick={goToDashboard}>Go to Dashboard</button>
  
  };
 
  return(
 <Router>
     <nav>
      
       <Link to="/">Home</Link> | <Link to="/about">About</Link>|<Link to="/dashboard">DashBoard</Link>
      
     </nav>
     <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/dashboard' element={<Dashboard/>}/>

    </Routes>
    </Router>
    

  ) 
  
  
}
export default App

  {/* //Conditional routing
  // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  // const handlelogin =()=> setIsAuthenticated(true);
  // const handleLogout =()=> setIsAuthenticated(false);

  // return (
  //  <Router>
  //   <nav>
      
  //     <Link to="/">Home</Link> | <Link to="/about">About</Link>|<Link to="/dashboard">DashBoard</Link>
  //     <button onClick={isAuthenticated? handleLogout: handlelogin}>
  //     {isAuthenticated?'logout':'login'}
  //     </button>
  //   </nav>
  //   <Routes>
  // <Route path='/' element={<Home/>}/>
  // <Route path='/about' element={<About/>}/>
  // <Route path='/dashboard' element={<Dashboard/>}/>

  //   </Routes>

  //  </Router>
 // )

} */}




