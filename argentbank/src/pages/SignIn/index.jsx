
import { useRef } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { getLogin, getToken } from '../../actions/loginAction'
import { useNavigate } from 'react-router-dom'

function SignIn () {
    const form = useRef()
    const info = useSelector((state) => state.loginReducer)
    const token = useSelector((state) => state.tokenReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleForm = async(e) => {
        e.preventDefault()
        const formData = {
            email: form.current[0].value,
            password: form.current[1].value
        }
        dispatch(getLogin(formData))
        dispatch(getToken(formData))
        if (info.status === 200) {
            navigate("/user")
            sessionStorage.setItem("token", token)
        }
        
        
    }
    console.log(info)
    console.log(token)
    return <><main className="main bg-dark">
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form ref={form} onSubmit={(e) => handleForm(e)}>
                <div className="input-wrapper">
                    <label>
                        Username
                        <input type="text" id="username" />
                    </label>
                </div>
                <div className="input-wrapper">
                    <label>
                        Password
                        <input type="password" id="password" />
                    </label>
                </div>
                <div className="input-remember">
                    <label>
                        Remember me
                        <input type="checkbox" id="remember-me" />
                    </label>
                </div>
                <button type="submit" className="sign-in-button">Sign In</button>
            </form>
        </section>
        </main>
    </>
}

export default SignIn