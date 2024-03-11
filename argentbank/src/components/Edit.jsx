function Edit () {
    return<>
        <form className="form-edit">
            <div className="input-wrapper">
                <label >
                    Username : 
                    <input type="text" id="username"/>
                </label>
            </div>
            <div className="input-wrapper">
                <label >
                    Firstname : 
                    <input type="text" id="username" disabled/>
                </label>
            </div>
            <div className="input-wrapper">
                <label >
                    Lastname : 
                    <input type="text" id="username"disabled/>
                </label>
            </div>
            <div className="form-edit-button">
                <button className="edit-button">Save</button>
                <button className="edit-button">Cancel</button>
            </div>
        </form>

    </>
}

export default Edit