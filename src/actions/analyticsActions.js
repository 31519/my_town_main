import {
    OBJECT_VIEW_LIST_REQUEST,
    OBJECT_VIEW_LIST_SUCCESS,
    OBJECT_VIEW_LIST_FAIL


} from '../constants/analyticsConstants'


import axios from 'axios'

// ADVERTISEMENT PORTION

export const objectViewListAction = () => async (dispatch) => {
    try{
        dispatch({ type: OBJECT_VIEW_LIST_REQUEST });
        const { data } = await axios.get(
            `/api/users/viewList/`
        );
        console.log("try")
        dispatch({
            type: OBJECT_VIEW_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        
        dispatch({
            type: OBJECT_VIEW_LIST_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}