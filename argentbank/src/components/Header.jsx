import { useSelector } from 'react-redux'
import logo from '../assets/argentBankLogo.png'
import {NavLink, useNavigate} from "react-router-dom"
import Button from './Button'
import {useState} from 'react'




function Header () {
    const token = sessionStorage.getItem('token')
    const [isLogged, setIsLogged] = useState(token !== null)
    const user = useSelector((state) => state.userReducer)
    const navigate = useNavigate()


    const handleLogin = () => {
        navigate("/login")
    }
    const handleLogout = () => {
        sessionStorage.removeItem("token")
        setIsLogged(false)
        navigate("/login")
    }
    return <header>
        <nav className="main-nav">
            <NavLink className="main-nav-logo">
                <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div className="main-login">
                {isLogged ? (
                    <>
                    <div>{user.userName}</div>
                    <i className="fa fa-user-circle"></i>
                    <Button title="Sign Out" classe="main-nav-item" onClick={handleLogout}/>
                    </>
                    
                ):(<>
                    <i className="fa fa-user-circle"></i>
                    <Button title="Sign In" classe="main-nav-item" onClick={handleLogin}/>
                </>)}
                
            </div>
        </nav>
    </header>
}

export default Header