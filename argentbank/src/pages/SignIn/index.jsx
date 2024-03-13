import { useEffect, useRef } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { getLogin, getToken } from '../../actions/loginAction'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'

function SignIn () {
    const form = useRef()
    const info = useSelector((state) => state.loginReducer)
    const token = useSelector((state) => state.tokenReducer)
    const dispatch = useDispatch()
    

    useEffect(() => {
        if (info.status === 200) {
            sessionStorage.setItem("token", token)
            navigate("/user")
            navigate(0)
        }
    }, [info.status, token])
    const navigate = useNavigate()
    const handleForm = (e) => {
        e.preventDefault()
        const formData = {
            email: form.current[0].value,
            password: form.current[1].value
        }
        dispatch(getLogin(formData))
        dispatch(getToken(formData))
    }

    return <><main className="main bg-dark">
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form ref={form}>
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
                <Button title="Sign In" classe="sign-in-button" onClick={(e) => handleForm(e)}/>
            </form>
        </section>
        </main>
    </>
}

export default SignIn