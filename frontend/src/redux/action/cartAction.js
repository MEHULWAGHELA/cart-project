import axios from "axios"
import { authorise } from "../../components/authorize/authorise"
import { DELETECART, GETCART, SETCART } from "../type/type"

export const getCart = () => {
    return (dispatch) => {
        axios.get('http://localhost:7000/api/addtocart/get', authorise())
            .then((res) => {
                dispatch({ type: GETCART, data: [...res.data.data] })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
export const setCart = (id) => {
    return (dispatch) => {
        console.log()
        axios.post('http://localhost:7000/api/addtocart/add', { productId: id }, authorise())
            .then((res) => {
                dispatch(getCart())
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
export const deleteCart = (id) => {
    return (dispatch) => {
        axios.delete('http://localhost:7000/api/addtocart/remove?productId=' + id, authorise())
            .then((res) => {
                dispatch(getCart())
            }).catch((err) => {
                console.log(err)
            })
    }
}