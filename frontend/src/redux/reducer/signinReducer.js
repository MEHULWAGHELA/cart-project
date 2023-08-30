import axios from "axios"
import { SIGNIN } from "../type/type"

let defaultState = {
    userData: [1]
}
export const signinReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SIGNIN: {
            return {
                token: action.token
            }
        }
        default: return state
    }
}