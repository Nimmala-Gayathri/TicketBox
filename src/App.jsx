import { Routes,Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import './App.css'
import Logo from './assets/Logo.png'
import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom"
import  Button  from 'react-bootstrap/Button';
import Login from './componets/Login';
import Signup from './componets/Signup';
import Home from './componets/Home';
import Movies from './componets/Movies';
import SelectSeat from './componets/SelectSeat';
import Success from './componets/Success';
import { Container } from 'react-bootstrap';
// import Success from "./componets/Success";

// const router = createBrowserRouter([
//   {
//     path:"/login",
//     element:<Login/>
//   },
//   {
//     path:"/signup",
//     element: <Signup/>
//   },
//   {
//     path:"/home",
//     element:<Home/>
//   }
// ])

function App() {
  const [user, setUser] = useState();
   const navigate = useNavigate()

  useEffect (() =>{
    const userEmail = localStorage.getItem("UserEmail");
    if(userEmail){
      setUser(userEmail)
    }
  },[user])

  const handleLogout = () =>{
    localStorage.removeItem("UserEmail")
    setUser("")
    setUser(null);
    // window.location.href = ("/login")
    navigate("/login")
  }
  console.log(user)

  return (
      <div>
          <Navbar className='page1' >
            <Container>
            <Navbar.Brand href="/" style={{color:"black",fontSize:"1.7rem",fontWeight:"bolder"}}>
            <img
              src={Logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              // style={{marginTop:"7px"}}
            />{' '}
             Ticket Box
            </Navbar.Brand>
            </Container>
            <Navbar.Collapse className="justify-content-end">
              { user &&  <Button onClick={() => handleLogout()}style={{width:"8rem",backgroundColor:"#f54236",border:"none",marginLeft:"2rem"}} >LogOut</Button>}
           </Navbar.Collapse> 
         </Navbar>
         <Routes>
         <Route  path='/' element={<Home/>}/> 
          <Route  path='/login' element={<Login setUser={setUser}/>}/>
          <Route path = '/signup' element ={<Signup setUser={setUser}/>}/>
          <Route  path='/movie/:id' element={<Movies/>}/>
          <Route  path='/select' element={<SelectSeat/>}/>
          <Route  path='/success' element={<Success/>}/>
          <Route path='/success' element={<Success/>} />
         </Routes>
         {/* <Login/> */}
         {/* <Signup/> */}
         {/* <Home/> */}

      </div>
    
  )
}

export default App
