import axios from "axios"
import { authorise } from "../../components/authorize/authorise"
import { GETPROFILE } from "../type/type"

export const getProfile = () => {
    return (dispatch) => {
        axios.get('http://localhost:7000/api/user/getUser', authorise())
            .then((res) => {
                console.log(res.data.data)
                dispatch({ type: GETPROFILE, data: [res.data.data] })
            }
            )
            .catch((err) => {
                console.log(err)
            })
    }
}