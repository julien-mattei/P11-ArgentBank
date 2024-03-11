import { GET_USER } from "../actions/loginAction";

const initialeState = {}

export default function userReducer(state=initialeState, action) {
    switch (action.type){
        case GET_USER:
            return action.payload;
        default:
            return state;
    }
}