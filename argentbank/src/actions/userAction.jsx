import axios from "axios";

export const GET_USER = "GET_USER"
export const PUT_USER = "PUT_USER"

const token = sessionStorage.getItem('token')

export const getUser = () => {
    return (dispatch) => {
        return axios.post("http://localhost:3001/api/v1/user/profile", {}, 
        {headers: {Authorization: `Bearer ${token}`}}).then((res) => {
            dispatch({type: GET_USER, payload: res.data.body})
            console.log(res.data.body)
        })
    }
}
export const putUser = (data) => {
    return (dispatch) => {
        return axios.put("http://localhost:3001/api/v1/user/profile", data, 
            {headers: {Authorization: `Bearer ${token}`}}).then((res) => {
            dispatch({type: PUT_USER, payload: data})
        })
    }
}

