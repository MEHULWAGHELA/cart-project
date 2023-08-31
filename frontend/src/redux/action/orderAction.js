import axios from "axios"
import { authorise } from "../../components/authorize/authorise"
import { DELETEORDER, GETORDER, SETORDER } from "../type/type"
import Swal from "sweetalert2"

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
                Swal.fire({
                    position: 'center-center',
                    icon: 'success',
                    title: 'Your Order Placed Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                dispatch(getOrder())
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
export const deleteOrder = (id) => {
    return (dispatch) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('http://localhost:7000/api/order/remove?productId=' + id, authorise())
                    .then((res) => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        dispatch(getOrder())
                    }).catch((err) => {
                        console.log(err)
                    })

            }
        })

    }
}