import axios from "axios"
import { authorise } from "../../components/authorize/authorise"
import { DELETEORDER, GETORDER, SETORDER } from "../type/type"

export const getOrder = () => {
    return (dispatch) => {
        axios.get('http://localhost:7000/api/order/get', authorise())
            .then((res) => {
                dispatch({ type: GETORDER, data: [...res.data.data] })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
export const setOrder = (obj) => {
    return (dispatch) => {
        axios.post('http://localhost:7000/api/order/add', obj, authorise())
            .then((res) => {
                dispatch(getOrder())
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
export const deleteOrder = (id) => {
    return (dispatch) => {
        axios.delete('http://localhost:7000/api/order/delete?id=' + id, authorise())
            .then((res) => {
                dispatch(getOrder())
            }).catch((err) => {
                console.log(err)
            })
    }
}