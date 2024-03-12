import { useDispatch, useSelector } from "react-redux"
import Button from "./Button"
import { useRef, useState } from "react"
import { putUser } from "../actions/userAction"

function Edit () {
    const [isOpen, setIsOpen] = useState(true)
    const form = useRef()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userReducer)
    const handleSave = () => {
        const putData = {
            userName: form.current[0].value
        }
        dispatch(putUser(putData))
        form.reset()
        setIsOpen(!isOpen)
    }
    const handleCancel = () => {
        setIsOpen(!isOpen)
    }
    
    return<>
        <form className="form-edit"ref={form}>
            <div className="input-wrapper" >
                <label >
                    Username : 
                    <input type="text" id="username"/>
                </label>
            </div>
            <div className="input-wrapper">
                <label >
                    Firstname : 
                    <input type="text" id="firstname" value={user.firstName || ''} disabled/>
                </label>
            </div>
            <div className="input-wrapper">
                <label >
                    Lastname : 
                    <input type="text" id="lastname" value={user.lastName || ''} disabled/>
                </label>
            </div>
            <div className="form-edit-button">
                <Button title="Save" classe="edit-button" onClick={handleSave}/>
                <Button title="Cancel" classe="edit-button" onClick={handleCancel}/>
            </div>
        </form>

    </>
}

export default Edit