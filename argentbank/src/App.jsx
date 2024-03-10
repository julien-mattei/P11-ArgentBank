import './App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Header from './components/Header'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'
import Layout from './components/Layout'


const router = createBrowserRouter([
  {
    element: <Layout />,
    children : [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "sign-in",
        element: <SignIn />
      },
      {
        path: "user",
        element: <User />
      }
    ]
  }
])

function App() {

  return <RouterProvider router = {router}/>
}

export default App
