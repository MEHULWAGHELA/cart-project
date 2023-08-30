import { USERGET, USERSET } from "../type/type"

export const getUserData = () => {
    return (dispatch) => {
        dispatch({ type: USERGET })
    }
}
export const setUserData = (data) => {
    return (dispatch) => {
        dispatch({ type: USERSET, obj: data })
    }
}