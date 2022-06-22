import {
    // HOTEL PORTION
    HOTEL_LIST_REQUEST,
    HOTEL_LIST_SUCCESS,
    HOTEL_LIST_FAIL,

    HOTEL_USER_LIST_REQUEST,
    HOTEL_USER_LIST_SUCCESS,
    HOTEL_USER_LIST_FAIL,

    HOTEL_DETAIL_REQUEST,
    HOTEL_DETAIL_SUCCESS,
    HOTEL_DETAIL_FAIL,

    HOTEL_CREATE_REQUEST,
    HOTEL_CREATE_SUCCESS,
    HOTEL_CREATE_FAIL,

    HOTEL_CREATE_RESET,
    HOTEL_UPDATE_REQUEST,
    HOTEL_UPDATE_SUCCESS,
    HOTEL_UPDATE_FAIL,
    HOTEL_UPDATE_RESET,

    HOTEL_DELETE_REQUEST,
    HOTEL_DELETE_SUCCESS,
    HOTEL_DELETE_FAIL,
    HOTEL_DELETE_RESET,

    // RESELLER PORTION
    RESELLER_LIST_REQUEST,
    RESELLER_LIST_SUCCESS,
    RESELLER_LIST_FAIL,

    ALL_RESELLER_LIST_REQUEST,
    ALL_RESELLER_LIST_SUCCESS,
    ALL_RESELLER_LIST_FAIL,

    RESELLER_USER_LIST_REQUEST,
    RESELLER_USER_LIST_SUCCESS,
    RESELLER_USER_LIST_FAIL,

    RESELLER_DETAIL_REQUEST,
    RESELLER_DETAIL_SUCCESS,
    RESELLER_DETAIL_FAIL,

    RESELLER_CREATE_REQUEST,
    RESELLER_CREATE_SUCCESS,
    RESELLER_CREATE_FAIL,
    RESELLER_CREATE_RESET,

    RESELLER_UPDATE_REQUEST,
    RESELLER_UPDATE_SUCCESS,
    RESELLER_UPDATE_FAIL,
    RESELLER_UPDATE_RESET,
    
    RESELLER_DELETE_REQUEST,
    RESELLER_DELETE_SUCCESS,
    RESELLER_DELETE_FAIL,
    RESELLER_DELETE_RESET,


    // TOURISMS PORTION
    TOURISMS_LIST_REQUEST,
    TOURISMS_LIST_SUCCESS,
    TOURISMS_LIST_FAIL,

    TOURISMS_USER_LIST_REQUEST,
    TOURISMS_USER_LIST_SUCCESS,
    TOURISMS_USER_LIST_FAIL,

    TOURISMS_DETAIL_REQUEST,
    TOURISMS_DETAIL_SUCCESS,
    TOURISMS_DETAIL_FAIL,

    TOURISMS_CREATE_REQUEST,
    TOURISMS_CREATE_SUCCESS,
    TOURISMS_CREATE_FAIL,
    TOURISMS_CREATE_RESET,

    TOURISMS_UPDATE_REQUEST,
    TOURISMS_UPDATE_SUCCESS,
    TOURISMS_UPDATE_FAIL,
    TOURISMS_UPDATE_RESET,

    TOURISMS_DELETE_REQUEST,
    TOURISMS_DELETE_SUCCESS,
    TOURISMS_DELETE_FAIL,
    TOURISMS_DELETE_RESET,

   // JOBS PORTION
   JOBS_LIST_REQUEST,
   JOBS_LIST_SUCCESS,
   JOBS_LIST_FAIL,

   JOBS_USER_LIST_REQUEST,
   JOBS_USER_LIST_SUCCESS,
   JOBS_USER_LIST_FAIL,

   JOBS_DETAIL_REQUEST,
   JOBS_DETAIL_SUCCESS,
   JOBS_DETAIL_FAIL,

   JOBS_CREATE_REQUEST,
   JOBS_CREATE_SUCCESS,
   JOBS_CREATE_FAIL,
   JOBS_CREATE_RESET,

   JOBS_UPDATE_REQUEST,
   JOBS_UPDATE_SUCCESS,
   JOBS_UPDATE_FAIL,
   JOBS_UPDATE_RESET,

   JOBS_DELETE_REQUEST,
   JOBS_DELETE_SUCCESS,
   JOBS_DELETE_FAIL,
   JOBS_DELETE_RESET,



} from '../constants/productivityConstants'

// SHOP PORTION

export const hotelListReducer = (state = {hotels: []}, action) => {
    switch (action.type) {
        case HOTEL_LIST_REQUEST:
            return { loading: true, hotels:[]};
        
        case HOTEL_LIST_SUCCESS:
            return {
                loading: false,
                hotels: action.payload.hotel,
                page: action.payload.page,
                pages: action.payload.pages,
            };

        case HOTEL_LIST_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}

export const hotelUserListReducer = (state = {hotels: []}, action) => {
    switch (action.type) {
        case HOTEL_USER_LIST_REQUEST:
            return { loading: true, hotels:[]};
        
        case HOTEL_USER_LIST_SUCCESS:
            return {
                loading: false,
                hotels: action.payload
            };

        case HOTEL_USER_LIST_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}

export const hotelDetailReducer = (state = {hotel: []}, action) => {
    switch (action.type) {
        case HOTEL_DETAIL_REQUEST:
            return { loading: true, ...state};
        
        case HOTEL_DETAIL_SUCCESS:
            return {
                loading: false,
                hotel: action.payload,
            };

        case HOTEL_DETAIL_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}

export const hotelCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case HOTEL_CREATE_REQUEST:
            return { loading: true, hotel:[]};
        
        case HOTEL_CREATE_SUCCESS:
            return {
                loading: false,
                hotel: action.payload,
                success:true
            };

        case HOTEL_CREATE_FAIL:
            return {loading:false, error: action.payload}
        
        case HOTEL_CREATE_RESET:
            return {}

        default:
            return state;
    }
}

export const hotelUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case HOTEL_UPDATE_REQUEST:
            return { loading: true};
        
        case HOTEL_UPDATE_SUCCESS:
            return {
                loading: false,
                hotel: action.payload,
                success:true
            };

        case HOTEL_UPDATE_FAIL:
            return {loading:false, error: action.payload}
        
        case HOTEL_UPDATE_RESET:
            return {}

        default:
            return state;
    }
}

export const hotelDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case HOTEL_DELETE_REQUEST:
            return { loading: true};
        
        case HOTEL_DELETE_SUCCESS:
            return {
                loading: false,
                hotel: action.payload,
                success:true
            };

        case HOTEL_DELETE_FAIL:
            return {loading:false, error: action.payload}
        
        case HOTEL_DELETE_RESET:
            return {}

        default:
            return state;
    }
}

// RESELLER PORTION

export const resellerListReducer = (state = {resellers: []}, action) => {
    switch (action.type) {
        case RESELLER_LIST_REQUEST:
            return { loading: true, resellers:[]};
        
        case RESELLER_LIST_SUCCESS:
            return {
                loading: false,
                resellers: action.payload.reseller,
                page: action.payload.page,
                pages: action.payload.pages,
            };

        case RESELLER_LIST_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}

export const allResellerListReducer = (state = {resellers: []}, action) => {
    switch (action.type) {
        case ALL_RESELLER_LIST_REQUEST:
            return { loading: true, resellers:[]};
        
        case ALL_RESELLER_LIST_SUCCESS:
            return {
                loading: false,
                resellers: action.payload
            };

        case ALL_RESELLER_LIST_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}


export const resellerUserListReducer = (state = {resellers: []}, action) => {
    switch (action.type) {
        case RESELLER_USER_LIST_REQUEST:
            return { loading: true, resellers:[]};
        
        case RESELLER_USER_LIST_SUCCESS:
            return {
                loading: false,
                resellers: action.payload
            };

        case RESELLER_USER_LIST_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}


export const resellerDetailReducer = (state = {reseller: []}, action) => {
    switch (action.type) {
        case RESELLER_DETAIL_REQUEST:
            return { loading: true, ...state};
        
        case RESELLER_DETAIL_SUCCESS:
            return {
                loading: false,
                reseller: action.payload,
            };

        case RESELLER_DETAIL_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}

export const resellerCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case RESELLER_CREATE_REQUEST:
            return { loading: true, reseller:[]};
        
        case RESELLER_CREATE_SUCCESS:
            return {
                loading: false,
                reseller: action.payload,
                success:true
            };

        case RESELLER_CREATE_FAIL:
            return {loading:false, error: action.payload}
        
        case RESELLER_CREATE_RESET:
            return {}

        default:
            return state;
    }
}

export const resellerUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case RESELLER_UPDATE_REQUEST:
            return { loading: true};
        
        case RESELLER_UPDATE_SUCCESS:
            return {
                loading: false,
                reseller: action.payload,
                success:true
            };

        case RESELLER_UPDATE_FAIL:
            return {loading:false, error: action.payload}
        
        case RESELLER_UPDATE_RESET:
            return {}

        default:
            return state;
    }
}

export const resellerDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case RESELLER_DELETE_REQUEST:
            return { loading: true};
        
        case RESELLER_DELETE_SUCCESS:
            return {
                loading: false,
                reseller: action.payload,
                success:true
            };

        case RESELLER_DELETE_FAIL:
            return {loading:false, error: action.payload}
        
        case RESELLER_DELETE_RESET:
            return {}

        default:
            return state;
    }
}

// TOURISMS PORTION

export const tourismsListReducer = (state = {tourismss: []}, action) => {
    switch (action.type) {
        case TOURISMS_LIST_REQUEST:
            return { loading: true, tourismss:[]};
        
        case TOURISMS_LIST_SUCCESS:
            return {
                loading: false,
                tourismss: action.payload.tourisms,
                page: action.payload.page,
                pages: action.payload.pages,
            };

        case TOURISMS_LIST_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}

export const tourismsUserListReducer = (state = {tourismss: []}, action) => {
    switch (action.type) {
        case TOURISMS_USER_LIST_REQUEST:
            return { loading: true, tourismss:[]};
        
        case TOURISMS_USER_LIST_SUCCESS:
            return {
                loading: false,
                tourismss: action.payload
            };

        case TOURISMS_USER_LIST_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}


export const tourismsDetailReducer = (state = {tourisms: []}, action) => {
    switch (action.type) {
        case TOURISMS_DETAIL_REQUEST:
            return { loading: true, ...state};
        
        case TOURISMS_DETAIL_SUCCESS:
            return {
                loading: false,
                tourisms: action.payload,
            };

        case TOURISMS_DETAIL_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}

export const tourismsCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case TOURISMS_CREATE_REQUEST:
            return { loading: true, reseller:[]};
        
        case TOURISMS_CREATE_SUCCESS:
            return {
                loading: false,
                tourisms: action.payload,
                success:true
            };

        case TOURISMS_CREATE_FAIL:
            return {loading:false, error: action.payload}
        
        case TOURISMS_CREATE_RESET:
            return {}

        default:
            return state;
    }
}

export const tourismsUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case TOURISMS_UPDATE_REQUEST:
            return { loading: true};
        
        case TOURISMS_UPDATE_SUCCESS:
            return {
                loading: false,
                tourisms: action.payload,
                success:true
            };

        case TOURISMS_UPDATE_FAIL:
            return {loading:false, error: action.payload}
        
        case TOURISMS_UPDATE_RESET:
            return {}

        default:
            return state;
    }
}

export const tourismsDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case TOURISMS_DELETE_REQUEST:
            return { loading: true};
        
        case TOURISMS_DELETE_SUCCESS:
            return {
                loading: false,
                tourisms: action.payload,
                success:true
            };

        case TOURISMS_DELETE_FAIL:
            return {loading:false, error: action.payload}
        
        case TOURISMS_DELETE_RESET:
            return {}

        default:
            return state;
    }
}

// JOBS PORTION

export const jobListReducer = (state = {jobs: []}, action) => {
    switch (action.type) {
        case JOBS_LIST_REQUEST:
            return { loading: true, jobs:[]};
        
        case JOBS_LIST_SUCCESS:
            return {
                loading: false,
                jobs: action.payload.jobs,
                page: action.payload.page,
                pages: action.payload.pages,
            };

        case JOBS_LIST_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}

export const jobUserListReducer = (state = {jobs: []}, action) => {
    switch (action.type) {
        case JOBS_USER_LIST_REQUEST:
            return { loading: true, jobs:[]};
        
        case JOBS_USER_LIST_SUCCESS:
            return {
                loading: false,
                jobs: action.payload
            };

        case JOBS_USER_LIST_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}

export const jobDetailReducer = (state = {job: []}, action) => {
    switch (action.type) {
        case JOBS_DETAIL_REQUEST:
            return { loading: true, ...state};
        
        case JOBS_DETAIL_SUCCESS:
            return {
                loading: false,
                job: action.payload,
            };

        case JOBS_DETAIL_FAIL:
            return {loading:false, error: action.payload}

        default:
            return state;
    }
}

export const jobCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case JOBS_CREATE_REQUEST:
            return { loading: true, reseller:[]};
        
        case JOBS_CREATE_SUCCESS:
            return {
                loading: false,
                job: action.payload,
                success:true
            };

        case JOBS_CREATE_FAIL:
            return {loading:false, error: action.payload}
        
        case JOBS_CREATE_RESET:
            return {}

        default:
            return state;
    }
}

export const jobUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case JOBS_UPDATE_REQUEST:
            return { loading: true};
        
        case JOBS_UPDATE_SUCCESS:
            return {
                loading: false,
                job: action.payload,
                success:true
            };

        case JOBS_UPDATE_FAIL:
            return {loading:false, error: action.payload}
        
        case JOBS_UPDATE_RESET:
            return {}

        default:
            return state;
    }
}

export const jobDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case JOBS_DELETE_REQUEST:
            return { loading: true};
        
        case JOBS_DELETE_SUCCESS:
            return {
                loading: false,
                job: action.payload,
                success:true
            };

        case JOBS_DELETE_FAIL:
            return {loading:false, error: action.payload}
        
        case JOBS_DELETE_RESET:
            return {}

        default:
            return state;
    }
}