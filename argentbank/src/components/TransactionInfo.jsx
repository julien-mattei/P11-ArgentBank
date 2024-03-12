import { useState } from "react"

function TransactionInfo ({data}) {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = (idx) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [idx]: !prevState[idx]
        }))
    }
    return <>
        {data.map((infos, idx) =>
             <div className="transaction-background" key={idx}>
                <div className="transaction-info">
                    <p>{infos.date}</p>
                    <p>{infos.description}</p>
                    <p>{infos.amount}</p>
                    <p>{infos.balance}</p>
                    <i className="fa fa-chevron-down" onClick={() => handleOpen(idx)}></i>
                </div>
                    {!isOpen[idx] ? "" : <div>
                        <div className="transaction-details">
                            <span>Transaction type: </span>
                            <p>{infos.type}</p>
                        </div>
                        <div className="transaction-details">
                            <span>Transaction type: </span>
                            <p>{infos.category}</p>
                            <i className="fa fa-pencil"></i>
                        </div>
                        <div className="transaction-details">
                            <span>Transaction type: </span>
                            <p>{infos.note}</p>
                            <i className="fa fa-pencil"></i>
                        </div>
            </div>}
                </div> 
            )}
    </>
}

export default TransactionInfo