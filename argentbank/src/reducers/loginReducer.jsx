import { GET_LOGIN} from "../actions/loginAction";


const initialeState = {}

export default function loginReducer(state = initialeState, action){
    switch (action.type){
        case GET_LOGIN:
            return action.payload;
        default:
            return state
    }
}