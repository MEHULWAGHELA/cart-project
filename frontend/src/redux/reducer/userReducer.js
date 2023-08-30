import axios from "axios"
import { USERGET, USERSET } from "../type/type"

let defaultState = {
    userData: []
}
export const userReducer = (state = defaultState, action) => {
    const getApi = () => {
        axios.get('http://localhost:7000/api/user/getUser').then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    const setApi = () => {
        axios.post('http://localhost:7000/api/user/register', action.obj).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    switch (action.type) {
        case USERGET: {
            getApi()
            return state
        }
        case USERSET: {
            setApi()
            return state
        }
        default: return state
    }
}