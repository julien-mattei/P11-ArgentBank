
import { useDispatch} from 'react-redux'
import './style.css'
import { getUser } from '../../actions/loginAction'
import { useState } from 'react'
import Edit from '../../components/Edit'
import Transaction from '../../components/Transaction'



function User () {
    const dispatch = useDispatch()
    const token = sessionStorage.getItem('token')
    const headers = {
    headers: {Authorization: `Bearer ${token}`}
    }
    dispatch(getUser(headers))


    const [isVisible, setIsVisible] = useState(false)
    const [isShown, setIsShown] = useState(false)
    const [isShown1, setIsShown1] = useState(false)
    const [isShown2, setIsShown2] = useState(false)
    const handleclick = () => {
        setIsVisible(!isVisible)
    }
    const showComponent = () => {
        setIsShown(!isShown)
    }
    const showComponent1 = () => {
        setIsShown1(!isShown1)
    }
    const showComponent2 = () => {
        setIsShown2(!isShown2)
    }
    return <>
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />!</h1>
                {isVisible && <Edit/>}
                {isVisible ? "": <button onClick={handleclick} className="edit-button">Edit Name</button>}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                <p className="account-amount">$2,082.79</p>
                <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button onClick={showComponent} className="transaction-button">View transactions</button>
                </div>
                
            </section>
            {isShown && <Transaction/>}
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                <p className="account-amount">$10,928.42</p>
                <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button onClick={showComponent1} className="transaction-button">View transactions</button>
                </div>
            </section>
            {isShown1 && <Transaction/>}

            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                <p className="account-amount">$184.30</p>
                <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button onClick={showComponent2} className="transaction-button">View transactions</button>
                </div>
            </section>
            {isShown2 && <Transaction/>}
        </main>
    </>
}

export default User