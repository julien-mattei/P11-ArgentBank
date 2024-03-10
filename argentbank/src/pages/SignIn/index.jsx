import './style.css'

function SignIn () {
    return <><main className="main bg-dark">
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
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
                <button className="sign-in-button">Sign In</button>
            </form>
        </section>
        </main>
    </>
}

export default SignIn