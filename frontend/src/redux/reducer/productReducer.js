import { GETPRODUCT, SETPRODUCT } from "../type/type";
let defaultState = {
    productData: []
}
export const productReducer = (state = defaultState, action) => {
    console.log(action)
    switch (action.type) {
        case GETPRODUCT: {
            return {
                productData: [...action.data]
            }
        }
        case SETPRODUCT: {
            return state
        }
        default: return state
    }
}