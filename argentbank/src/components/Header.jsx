import { useSelector } from 'react-redux'
import logo from '../assets/argentBankLogo.png'
import {NavLink} from "react-router-dom"


function Header () {
    const user = useSelector((state) => state.userReducer)
    return <header>
        <nav className="main-nav">
            <NavLink className={"main-nav-logo"}>
                <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                <NavLink to="/sign-in" className={"main-nav-item"}>
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            </div>
        </nav>
    </header>
}

export default Header