import { useState } from "react"
import Transaction from "./Transaction"

function Account ({title, amount, description}) {
    const [isShown, setIsShown] = useState(false)
    const showComponent = () => {
        setIsShown(!isShown)
    }
    return <>
        <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
                </div>
                <div className="account-content-wrapper cta">
                <button onClick={showComponent} className="transaction-button">View transactions</button>
                </div>
            </section>
            {isShown && <Transaction/>}
    </>
}

export default Account