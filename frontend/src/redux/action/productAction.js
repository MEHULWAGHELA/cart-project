import axios from "axios"
import { authorise } from "../../components/authorize/authorise"
import { DELETEPRODUCT, GETPRODUCT, SETPRODUCT } from "../type/type"

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
                dispatch(getProduct())
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
    export const deleteProduct = (id) => {
        return (dispatch) => {
        axios.delete('http://localhost:7000/api/product/delete?id='+id,authorise())
        .then((res)=>{
            dispatch(getProduct())
        }).catch((err)=>{
            console.log(err)
        })
    }
}