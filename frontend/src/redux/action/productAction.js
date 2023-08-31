import axios from "axios"
import { authorise } from "../../components/authorize/authorise"
import { DELETEPRODUCT, GETPRODUCT, SETPRODUCT } from "../type/type"
import Swal from "sweetalert2"

export const getProduct = () => {
    return (dispatch) => {
        axios.get('http://localhost:7000/api/product/get', authorise())
            .then((res) => {
                dispatch({ type: GETPRODUCT, data: [...res.data.data] })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
export const setProduct = (obj) => {
    return (dispatch) => {
        axios.post('http://localhost:7000/api/product/add', obj, authorise())
            .then((res) => {
                Swal.fire({
                    position: 'center-ceter',
                    icon: 'success',
                    title: 'Your Product Add Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                dispatch(getProduct())
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
export const deleteProduct = (id) => {
    return (dispatch) => {
        axios.delete('http://localhost:7000/api/product/delete?id=' + id, authorise())
            .then((res) => {

                dispatch(getProduct())
            }).catch((err) => {
                console.log(err)
            })
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
                axios.delete('http://localhost:7000/api/product/delete?id=' + id, authorise())
                    .then((res) => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        dispatch(getProduct())
                    }).catch((err) => {
                        console.log(err)
                    })
            }
        })
    }
}