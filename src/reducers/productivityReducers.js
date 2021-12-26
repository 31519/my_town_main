import {
    ADVERTISE_LIST_REQUEST,
    ADVERTISE_LIST_SUCCESS,
    ADVERTISE_LIST_FAIL,

    ADVERTISE_DETAIL_REQUEST,
    ADVERTISE_DETAIL_SUCCESS,
    ADVERTISE_DETAIL_FAIL,


    ADVERTISE_CREATE_REQUEST,
    ADVERTISE_CREATE_SUCCESS,
    ADVERTISE_CREATE_FAIL,
    ADVERTISE_CREATE_RESET,

    ADVERTISE_UPDATE_REQUEST,
    ADVERTISE_UPDATE_SUCCESS,
    ADVERTISE_UPDATE_FAIL,
    ADVERTISE_UPDATE_RESET,

    ADVERTISE_DELETE_REQUEST,
    ADVERTISE_DELETE_SUCCESS,
    ADVERTISE_DELETE_FAIL,
    ADVERTISE_DELETE_RESET,

    // CELEBRITY PART
    CELEBRITY_LIST_REQUEST,
    CELEBRITY_LIST_SUCCESS,
    CELEBRITY_LIST_FAIL,

    CELEBRITY_DETAIL_REQUEST,
    CELEBRITY_DETAIL_SUCCESS,
    CELEBRITY_DETAIL_FAIL,
    CELEBRITY_DETAIL_RESET,


    CELEBRITY_CREATE_REQUEST,
    CELEBRITY_CREATE_SUCCESS,
    CELEBRITY_CREATE_FAIL,
    CELEBRITY_CREATE_RESET,

    CELEBRITY_UPDATE_REQUEST,
    CELEBRITY_UPDATE_SUCCESS,
    CELEBRITY_UPDATE_FAIL,
    CELEBRITY_UPDATE_RESET,

    CELEBRITY_DELETE_REQUEST,
    CELEBRITY_DELETE_SUCCESS,
    CELEBRITY_DELETE_FAIL,
    CELEBRITY_DELETE_RESET,

    // EVENT PORTION

    EVENT_LIST_REQUEST,
    EVENT_LIST_SUCCESS,
    EVENT_LIST_FAIL,

    EVENT_DETAIL_REQUEST,
    EVENT_DETAIL_SUCCESS,
    EVENT_DETAIL_FAIL,


    EVENT_CREATE_REQUEST,
    EVENT_CREATE_SUCCESS,
    EVENT_CREATE_FAIL,
    EVENT_CREATE_RESET,

    EVENT_UPDATE_REQUEST,
    EVENT_UPDATE_SUCCESS,
    EVENT_UPDATE_FAIL,
    EVENT_UPDATE_RESET,

    EVENT_DELETE_REQUEST,
    EVENT_DELETE_SUCCESS,
    EVENT_DELETE_FAIL,
    EVENT_DELETE_RESET,

    // SHOP PORTION
    SHOP_LIST_REQUEST,
    SHOP_LIST_SUCCESS,
    SHOP_LIST_FAIL,

    SHOP_DETAIL_REQUEST,
    SHOP_DETAIL_SUCCESS,
    SHOP_DETAIL_FAIL,

    SHOP_CREATE_REQUEST,
    SHOP_CREATE_SUCCESS,
    SHOP_CREATE_FAIL,
    SHOP_CREATE_RESET,

    SHOP_UPDATE_REQUEST,
    SHOP_UPDATE_SUCCESS,
    SHOP_UPDATE_FAIL,
    SHOP_UPDATE_RESET,
    
    SHOP_DELETE_REQUEST,
    SHOP_DELETE_SUCCESS,
    SHOP_DELETE_FAIL,
    SHOP_DELETE_RESET,




} from '../constants/productivityConstants'


// ADVERTISEMENT PORTION

export const advertiseListReducer = (state = {advertises: []}, action) => {
    switch (action.type) {
        case ADVERTISE_LIST_REQUEST:
            return { loading: true, advertises:[]};
        
        case ADVERTISE_LIST_SUCCESS:
            return {
                loading: false,
                advertises: action.payload.advertise,
                page: action.payload.page,
                pages: action.payload.pages,
            };

        case ADVERTISE_LIST_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}

export const advertiseDetailReducer = (state = {advertise: []}, action) => {
    switch (action.type) {
        case ADVERTISE_DETAIL_REQUEST:
            return { loading: true, ...state};
        
        case ADVERTISE_DETAIL_SUCCESS:
            return {
                loading: false,
                advertise: action.payload,
            };

        case ADVERTISE_DETAIL_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}



export const advertiseCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ADVERTISE_CREATE_REQUEST:
            return { loading: true, advertise:[]};
        
        case ADVERTISE_CREATE_SUCCESS:
            return {
                loading: false,
                advertise: action.payload,
                success:true
            };

        case ADVERTISE_CREATE_FAIL:
            return {loading:false, error: action.payload}
        
        case ADVERTISE_CREATE_RESET:
            return {}

        default:
            return state;
    }
}


export const advertiseUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case ADVERTISE_UPDATE_REQUEST:
            return { loading: true};
        
        case ADVERTISE_UPDATE_SUCCESS:
            return {
                loading: false,
                advertise: action.payload,
                success:true
            };

        case ADVERTISE_UPDATE_FAIL:
            return {loading:false, error: action.payload}
        
        case ADVERTISE_UPDATE_RESET:
            return {}

        default:
            return state;
    }
}


export const advertiseDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case ADVERTISE_DELETE_REQUEST:
            return { loading: true};
        
        case ADVERTISE_DELETE_SUCCESS:
            return {
                loading: false,
                advertise: action.payload,
                success:true
            };

        case ADVERTISE_DELETE_FAIL:
            return {loading:false, error: action.payload}
        
        case ADVERTISE_DELETE_RESET:
            return {}

        default:
            return state;
    }
}


// CELEBRITY PORTION


export const celebrityListReducer = (state = {celebrities: []}, action) => {
    switch (action.type) {
        case CELEBRITY_LIST_REQUEST:
            return { loading: true, celebrities:[]};
        
        case CELEBRITY_LIST_SUCCESS:
            return {
                loading: false,
                celebrities: action.payload.celebrity,
                page: action.payload.page,
                pages: action.payload.pages,
            };

        case CELEBRITY_LIST_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}

export const celebrityDetailReducer = (state = {celebrity: []}, action) => {
    switch (action.type) {
        case CELEBRITY_DETAIL_REQUEST:
            return { loading: true, ...state};
        
        case CELEBRITY_DETAIL_SUCCESS:
            return {
                loading: false,
                celebrity: action.payload,
            };

        case CELEBRITY_DETAIL_FAIL:
            return {loading:false, error: action.payload}
        
        case CELEBRITY_DETAIL_RESET:
            return {}

        default:
            return state;
    }
}



export const celebrityCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CELEBRITY_CREATE_REQUEST:
            return { loading: true, celebrity:[]};
        
        case CELEBRITY_CREATE_SUCCESS:
            return {
                loading: false,
                celebrity: action.payload,
                success:true
            };

        case CELEBRITY_CREATE_FAIL:
            return {loading:false, error: action.payload}
        
        case CELEBRITY_CREATE_RESET:
            return {}

        default:
            return state;
    }
}


export const celebrityUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case CELEBRITY_UPDATE_REQUEST:
            return { loading: true};
        
        case CELEBRITY_UPDATE_SUCCESS:
            return {
                loading: false,
                celebrity: action.payload,
                success:true
            };

        case CELEBRITY_UPDATE_FAIL:
            return {loading:false, error: action.payload}
        
        case CELEBRITY_UPDATE_RESET:
            return {}

        default:
            return state;
    }
}


export const celebrityDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case CELEBRITY_DELETE_REQUEST:
            return { loading: true};
        
        case CELEBRITY_DELETE_SUCCESS:
            return {
                loading: false,
                celebrity: action.payload,
                success:true
            };

        case CELEBRITY_DELETE_FAIL:
            return {loading:false, error: action.payload}
        
        case CELEBRITY_DELETE_RESET:
            return {}

        default:
            return state;
    }
}

// EVENT PORTION

export const eventListReducer = (state = {events: []}, action) => {
    switch (action.type) {
        case EVENT_LIST_REQUEST:
            return { loading: true, events:[]};
        
        case EVENT_LIST_SUCCESS:
            return {
                loading: false,
                events: action.payload.events,
                pages: action.payload.pages,
                page: action.payload.page
            };

        case EVENT_LIST_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}


export const eventDetailReducer = (state = {event: []}, action) => {
    switch (action.type) {
        case EVENT_DETAIL_REQUEST:
            return { loading: true, ...state};
        
        case EVENT_DETAIL_SUCCESS:
            return {
                loading: false,
                event: action.payload,
            };

        case EVENT_DETAIL_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}



export const eventCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case EVENT_CREATE_REQUEST:
            return { loading: true, advertise:[]};
        
        case EVENT_CREATE_SUCCESS:
            return {
                loading: false,
                event: action.payload,
                success:true
            };

        case EVENT_CREATE_FAIL:
            return {loading:false, error: action.payload}
        
        case EVENT_CREATE_RESET:
            return {}

        default:
            return state;
    }
}


export const eventUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case EVENT_UPDATE_REQUEST:
            return { loading: true};
        
        case EVENT_UPDATE_SUCCESS:
            return {
                loading: false,
                event: action.payload,
                success:true
            };

        case EVENT_UPDATE_FAIL:
            return {loading:false, error: action.payload}
        
        case EVENT_UPDATE_RESET:
            return {}

        default:
            return state;
    }
}


export const eventDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case EVENT_DELETE_REQUEST:
            return { loading: true};
        
        case EVENT_DELETE_SUCCESS:
            return {
                loading: false,
                event: action.payload,
                success:true
            };

        case EVENT_DELETE_FAIL:
            return {loading:false, error: action.payload}
        
        case EVENT_DELETE_RESET:
            return {}

        default:
            return state;
    }
}




// SHOP PORTION

export const shopListReducer = (state = {shops: []}, action) => {
    switch (action.type) {
        case SHOP_LIST_REQUEST:
            return { loading: true, shops:[]};
        
        case SHOP_LIST_SUCCESS:
            return {
                loading: false,
                shops: action.payload.shop,
                page: action.payload.page,
                pages: action.payload.pages,
            };

        case SHOP_LIST_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}


export const shopDetailReducer = (state = {shop: []}, action) => {
    switch (action.type) {
        case SHOP_DETAIL_REQUEST:
            return { loading: true, ...state};
        
        case SHOP_DETAIL_SUCCESS:
            return {
                loading: false,
                shop: action.payload,
            };

        case SHOP_DETAIL_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}



export const shopCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case SHOP_CREATE_REQUEST:
            return { loading: true, shop:[]};
        
        case SHOP_CREATE_SUCCESS:
            return {
                loading: false,
                shop: action.payload,
                success:true
            };

        case SHOP_CREATE_FAIL:
            return {loading:false, error: action.payload}
        
        case SHOP_CREATE_RESET:
            return {}

        default:
            return state;
    }
}


export const shopUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case SHOP_UPDATE_REQUEST:
            return { loading: true};
        
        case SHOP_UPDATE_SUCCESS:
            return {
                loading: false,
                shop: action.payload,
                success:true
            };

        case SHOP_UPDATE_FAIL:
            return {loading:false, error: action.payload}
        
        case SHOP_UPDATE_RESET:
            return {}

        default:
            return state;
    }
}


export const shopDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case SHOP_DELETE_REQUEST:
            return { loading: true};
        
        case SHOP_DELETE_SUCCESS:
            return {
                loading: false,
                shop: action.payload,
                success:true
            };

        case SHOP_DELETE_FAIL:
            return {loading:false, error: action.payload}
        
        case SHOP_DELETE_RESET:
            return {}

        default:
            return state;
    }
}