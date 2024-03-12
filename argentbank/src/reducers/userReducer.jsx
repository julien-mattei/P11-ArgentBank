import { GET_USER, PUT_USER } from "../actions/userAction";

const initialeState = {}

export default function userReducer(state=initialeState, action) {
    switch (action.type){
        case GET_USER:
            return action.payload;
        case PUT_USER:
            return action.payload;
        default:
            return state;
    }
}