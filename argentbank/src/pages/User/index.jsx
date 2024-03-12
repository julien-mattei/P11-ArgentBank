
import { useDispatch, useSelector} from 'react-redux'
import './style.css'
import { getUser } from '../../actions/userAction'
import { useEffect, useState } from 'react'
import Edit from '../../components/Edit'
import Account from '../../components/Account'
import Button from '../../components/Button'




function User () {
    const user = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])
    const [isVisible, setIsVisible] = useState(false)
    const handleclick = () => {
        setIsVisible(!isVisible)
    }

    const account = [
        {
            "title" : "Argent Bank Savings (x8349)",
            "amount" : "$2,082.79",
            "description": "Available Balance"
        },
        {
            "title" : "Argent Bank Savings (x6712)",
            "amount" : "$10,928.42",
            "description": "Available Balance"
        },
        {
            "title" : "Argent Bank Savings (x8349)",
            "amount" : "$184.30",
            "description": "Current Balance"
        }
        
    ]
    return <>
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
                {isVisible ? <Edit/> : <Button title="Edit Name" classe="edit-button" onClick={handleclick}/>}
            </div>
            <h2 className="sr-only">Accounts</h2>
                {account.map((account, idx) => 
                    <Account 
                        key={idx}
                        title={account.title} 
                        amount={account.amount}
                        description={account.description}
                    />
                )}
        </main>
    </>
}

export default User