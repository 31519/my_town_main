import axios from 'axios'



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
    // HOTEL_CREATE_RESET,
    HOTEL_UPDATE_REQUEST,
    HOTEL_UPDATE_SUCCESS,
    HOTEL_UPDATE_FAIL,
    // HOTEL_UPDATE_RESET,
    HOTEL_DELETE_REQUEST,
    HOTEL_DELETE_SUCCESS,
    HOTEL_DELETE_FAIL,
    // HOTEL_DELETE_RESET,

    // RESELLER PORTION
    RESELLER_LIST_REQUEST,
    RESELLER_LIST_SUCCESS,
    RESELLER_LIST_FAIL,

    RESELLER_USER_LIST_REQUEST,
    RESELLER_USER_LIST_SUCCESS,
    RESELLER_USER_LIST_FAIL,

    RESELLER_DETAIL_REQUEST,
    RESELLER_DETAIL_SUCCESS,
    RESELLER_DETAIL_FAIL,

    RESELLER_CREATE_REQUEST,
    RESELLER_CREATE_SUCCESS,
    RESELLER_CREATE_FAIL,
    // RESELLER_CREATE_RESET,

    RESELLER_UPDATE_REQUEST,
    RESELLER_UPDATE_SUCCESS,
    RESELLER_UPDATE_FAIL,
    // RESELLER_UPDATE_RESET,

    RESELLER_DELETE_REQUEST,
    RESELLER_DELETE_SUCCESS,
    RESELLER_DELETE_FAIL,
    // RESELLER_DELETE_RESET,


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
    // TOURISMS_CREATE_RESET,

    TOURISMS_UPDATE_REQUEST,
    TOURISMS_UPDATE_SUCCESS,
    TOURISMS_UPDATE_FAIL,
    // TOURISMS_UPDATE_RESET,

    TOURISMS_DELETE_REQUEST,
    TOURISMS_DELETE_SUCCESS,
    TOURISMS_DELETE_FAIL,
    // TOURISMS_DELETE_RESET,

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
//    JOBS_CREATE_RESET,

   JOBS_UPDATE_REQUEST,
   JOBS_UPDATE_SUCCESS,
   JOBS_UPDATE_FAIL,
//    JOBS_UPDATE_RESET,

   JOBS_DELETE_REQUEST,
   JOBS_DELETE_SUCCESS,
   JOBS_DELETE_FAIL,
//    JOBS_DELETE_RESET,




} from '../constants/productivityConstants'


// HOTEL PORTION

export const hotelListAction = (keyword='') => async (dispatch) => {
    try{
        dispatch({ type: HOTEL_LIST_REQUEST });
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/hotels/list${keyword}`
        );
        dispatch({
            type: HOTEL_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: HOTEL_LIST_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const hotelUserListAction = () => async (dispatch, getState) => {
    try{
        dispatch({ type: HOTEL_USER_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/hotels/user-list/`,
            config
        );
        dispatch({
            type: HOTEL_USER_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: HOTEL_USER_LIST_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}


export const hotelDetailAction = (id,slug) => async (dispatch) => {
    try{
        dispatch({ type: HOTEL_DETAIL_REQUEST });
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/hotels/list/${id}/${slug}`
        );
        dispatch({
            type: HOTEL_DETAIL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: HOTEL_DETAIL_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const hotelCreateAction = () => async (dispatch, getState) => {
    try{
        dispatch({ type: HOTEL_CREATE_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }


        const { data } = await axios.post(
            `${process.env.REACT_APP_PORT}/api/hotels/create/`,
            {},
            config
        );


        dispatch({
            type: HOTEL_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: HOTEL_CREATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const hotelUpdateAction = (shop) => async (dispatch, getState) => {
    try{
        dispatch({ type: HOTEL_UPDATE_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }


        const { data } = await axios.put(
            `${process.env.REACT_APP_PORT}/api/hotels/update/${shop.id}/${shop.slug}/`,
            shop,
            config
        );


        dispatch({
            type: HOTEL_UPDATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: HOTEL_UPDATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const hotelDeleteAction = (id, slug) => async (dispatch, getState) => {
    try{
        dispatch({ type: HOTEL_DELETE_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }


        const { data } = await axios.delete(
            `${process.env.REACT_APP_PORT}/api/hotels/delete/${id}/${slug}/`,
            
            config
        );


        dispatch({
            type: HOTEL_DELETE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: HOTEL_DELETE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

// RESELLER PORTION

export const resellerListAction = (keyword="") => async (dispatch) => {
    try{
        dispatch({ type: RESELLER_LIST_REQUEST });
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/resell/list${keyword}`
        );
        dispatch({
            type: RESELLER_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: RESELLER_LIST_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const resellerUserListAction = () => async (dispatch, getState) => {
    try{
        dispatch({ type: RESELLER_USER_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/resell/user-list/`,
            config
        );
        dispatch({
            type: RESELLER_USER_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: RESELLER_USER_LIST_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}


export const resellerDetailAction = (id, slug) => async (dispatch) => {
    try{
        dispatch({ type: RESELLER_DETAIL_REQUEST });
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/resell/list/${id}/${slug}`
        );
        dispatch({
            type: RESELLER_DETAIL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: RESELLER_DETAIL_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const resellerCreateAction = () => async (dispatch, getState) => {
    try{
        dispatch({ type: RESELLER_CREATE_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }


        const { data } = await axios.post(
            `${process.env.REACT_APP_PORT}/api/resell/create/`,
            {},
            config
        );


        dispatch({
            type: RESELLER_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: RESELLER_CREATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const resellerUpdateAction = (reseller) => async (dispatch, getState) => {
    try{
        dispatch({ type: RESELLER_UPDATE_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }


        const { data } = await axios.put(
            `${process.env.REACT_APP_PORT}/api/resell/update/${reseller.id}/${reseller.slug}/`,
            reseller,
            config
        );


        dispatch({
            type: RESELLER_UPDATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: RESELLER_UPDATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const resellerDeleteAction = (id, slug) => async (dispatch, getState) => {
    try{
        dispatch({ type: RESELLER_DELETE_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }


        const { data } = await axios.delete(
            `${process.env.REACT_APP_PORT}/api/resell/delete/${id}/${slug}/`,
            
            config
        );


        dispatch({
            type: RESELLER_DELETE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: RESELLER_DELETE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

// TOURISMS PORTION

export const tourismsListAction = (keyword="") => async (dispatch) => {
    try{
        dispatch({ type: TOURISMS_LIST_REQUEST });
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/tourisms/list${keyword}`
        );
        dispatch({
            type: TOURISMS_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: TOURISMS_LIST_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const tourismsUserListAction = () => async (dispatch, getState) => {
    try{
        dispatch({ type: TOURISMS_USER_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/tourisms/user-list/`,
            config
        );
        dispatch({
            type: TOURISMS_USER_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: TOURISMS_USER_LIST_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}


export const tourismsDetailAction = (id, slug) => async (dispatch) => {
    try{
        dispatch({ type: TOURISMS_DETAIL_REQUEST });
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/tourisms/list/${id}/${slug}`
        );
        dispatch({
            type: TOURISMS_DETAIL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: TOURISMS_DETAIL_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const tourismsCreateAction = () => async (dispatch, getState) => {
    try{
        dispatch({ type: TOURISMS_CREATE_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }


        const { data } = await axios.post(
            `${process.env.REACT_APP_PORT}/api/tourisms/create/`,
            {},
            config
        );


        dispatch({
            type: TOURISMS_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: TOURISMS_CREATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const tourismsUpdateAction = (tourisms) => async (dispatch, getState) => {
    try{
        dispatch({ type: TOURISMS_UPDATE_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }


        const { data } = await axios.put(
            `${process.env.REACT_APP_PORT}/api/tourisms/update/${tourisms.id}/${tourisms.slug}/`,
            tourisms,
            config
        );


        dispatch({
            type: TOURISMS_UPDATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: TOURISMS_UPDATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const tourismsDeleteAction = (id,slug) => async (dispatch, getState) => {
    try{
        dispatch({ type: TOURISMS_DELETE_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }


        const { data } = await axios.delete(
            `${process.env.REACT_APP_PORT}/api/tourisms/delete/${id}/${slug}/`,
            
            config
        );


        dispatch({
            type: TOURISMS_DELETE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: TOURISMS_DELETE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

// JOBS PORTION

export const jobListAction = (keyword='') => async (dispatch) => {
    try{
        dispatch({ type: JOBS_LIST_REQUEST });
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/jobs/list${keyword}`
        );
        dispatch({
            type: JOBS_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: JOBS_LIST_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}


export const jobUserListAction = () => async (dispatch, getState) => {
    try{
        dispatch({ type: JOBS_USER_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/jobs/user-list/`,
            config
        );
        dispatch({
            type: JOBS_USER_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: JOBS_USER_LIST_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}


export const jobDetailAction = (id,slug) => async (dispatch) => {
    try{
        dispatch({ type: JOBS_DETAIL_REQUEST });
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/jobs/list/${id}/${slug}`
        );
        dispatch({
            type: JOBS_DETAIL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: JOBS_DETAIL_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const jobCreateAction = () => async (dispatch, getState) => {
    try{
        dispatch({ type: JOBS_CREATE_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }


        const { data } = await axios.post(
            `${process.env.REACT_APP_PORT}/api/jobs/create/`,
            {},
            config
        );


        dispatch({
            type: JOBS_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: JOBS_CREATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const jobUpdateAction = (job) => async (dispatch, getState) => {
    try{
        dispatch({ type: JOBS_UPDATE_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }


        const { data } = await axios.put(
            `${process.env.REACT_APP_PORT}/api/jobs/update/${job.id}/${job.slug}/`,
            job,
            config
        );


        dispatch({
            type: JOBS_UPDATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: JOBS_UPDATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const jobDeleteAction = (id,slug) => async (dispatch, getState) => {
    try{
        dispatch({ type: JOBS_DELETE_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }


        const { data } = await axios.delete(
            `${process.env.REACT_APP_PORT}/api/jobs/delete/${id}/${slug}/`,
            
            config
        );


        dispatch({
            type: JOBS_DELETE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: JOBS_DELETE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}
