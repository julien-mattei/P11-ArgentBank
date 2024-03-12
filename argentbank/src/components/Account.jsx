import { useState } from "react"
import Transaction from "./Transaction"
import Button from "./Button"


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
                <Button title="View transactions" classe="transaction-button" onClick={showComponent} />
            </div>
        </section>
            {isShown ? <Transaction/> :"" }
    </>
}

export default Account