import { GET_TOKEN } from "../actions/loginAction";


const initialeState = {}

export default function tokenReducer(state = initialeState, action){
    switch (action.type){
        case GET_TOKEN:
            return action.payload;
        default:
            return state
    }
}