import axios from "axios"
import { authorise } from "../../components/authorize/authorise"
import { GETORDERCOMPLETED } from "../type/type"

export const getOrderCompleted = () => {
    return (dispatch) => {
        axios.get('http://localhost:7000/api/orderCompleted/get', authorise())
            .then((res) => {
                dispatch({ type: GETORDERCOMPLETED, data: [...res.data.data] })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
