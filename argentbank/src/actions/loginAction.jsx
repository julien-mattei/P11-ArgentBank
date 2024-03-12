import axios from "axios";

export const GET_LOGIN = "GET_LOGIN"
export const GET_TOKEN = "GET_TOKEN"


export const getLogin = (data) => {
    return (dispatch) => {
        return axios.post("http://localhost:3001/api/v1/user/login", data).then((res) => {
            dispatch({type: GET_LOGIN, payload: res.data})
        })
    }
}
export const getToken = (data) => {
    return (dispatch) => {
        return axios.post("http://localhost:3001/api/v1/user/login", data).then((res) => {
            dispatch({type: GET_TOKEN, payload: res.data.body.token})
        })
    }
}


