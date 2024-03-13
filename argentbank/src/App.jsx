import './App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'
import Layout from './components/Layout'

function App() {
  const [isLogged, setIsLogged] = useState(false); // Initialiser à false

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLogged(true); // Mettre à true si un token est présent
    } else {
      setIsLogged(false);
    }
  }, []);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children : [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <SignIn />
      },
      {
        path: "user",
        element : isLogged ? <User /> : <SignIn />
        
      }
    ]
  }
])



  return <RouterProvider router = {router}/>
}

export default App
