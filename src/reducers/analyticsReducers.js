import {
    OBJECT_VIEW_LIST_REQUEST,
    OBJECT_VIEW_LIST_SUCCESS,
    OBJECT_VIEW_LIST_FAIL


} from '../constants/analyticsConstants'


export const viewListReducer = (state = {view: []}, action) => {
    switch (action.type) {
        case OBJECT_VIEW_LIST_REQUEST:
            return { loading: true, view:[]};
        
        case OBJECT_VIEW_LIST_SUCCESS:
            return {
                loading: false,
                view: action.payload,
            };

        case OBJECT_VIEW_LIST_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}