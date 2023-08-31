import axios from "axios"
import { authorise } from "../../components/authorize/authorise"
import { DELETECART, GETCART, SETCART } from "../type/type"
import Swal from "sweetalert2"

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
        axios.post('http://localhost:7000/api/addtocart/add', { productId: id }, authorise())
            .then((res) => {
                Swal.fire({
                    position: 'center-center',
                    icon: 'success',
                    title: 'Product Added in Cart',
                    showConfirmButton: false,
                    timer: 1500
                })
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