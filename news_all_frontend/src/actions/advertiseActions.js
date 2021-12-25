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


    ADVERTISE_UPDATE_REQUEST,
    ADVERTISE_UPDATE_SUCCESS,
    ADVERTISE_UPDATE_FAIL,
    // ADVERTISE_UPDATE_RESET,

    ADVERTISE_DELETE_REQUEST,
    ADVERTISE_DELETE_SUCCESS,
    ADVERTISE_DELETE_FAIL,
    // ADVERTISE_DELETE_RESET,

     // CELEBRITY PART
     CELEBRITY_LIST_REQUEST,
     CELEBRITY_LIST_SUCCESS,
     CELEBRITY_LIST_FAIL,
 
     CELEBRITY_DETAIL_REQUEST,
     CELEBRITY_DETAIL_SUCCESS,
     CELEBRITY_DETAIL_FAIL,
 
 
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

import axios from 'axios'

// ADVERTISEMENT PORTION

export const advertiseListAction = (keyword = '') => async (dispatch) => {
    try{
        dispatch({ type: ADVERTISE_LIST_REQUEST });
        const { data } = await axios.get(
            `http://127.0.0.1:8000/api/advertisement/list${keyword}`
        );
        dispatch({
            type: ADVERTISE_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ADVERTISE_LIST_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}



export const advertiseDetailAction = (id, slug) => async (dispatch) => {
    try{
        dispatch({ type: ADVERTISE_DETAIL_REQUEST });
        const { data } = await axios.get(
            `http://127.0.0.1:8000/api/advertisement/list/${id}/${slug}`
        );
        dispatch({
            type: ADVERTISE_DETAIL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ADVERTISE_DETAIL_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}


export const advertiseCreateAction = () => async (dispatch, getState) => {
    try{
        dispatch({ type: ADVERTISE_CREATE_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        console.log("userinfo", userInfo.token)


        const { data } = await axios.post(
            `http://127.0.0.1:8000/api/advertisement/create/`,
            {},
            config
        );



        dispatch({
            type: ADVERTISE_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ADVERTISE_CREATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const advertiseUpdateAction = (advertise) => async (dispatch, getState) => {
    try{
        dispatch({ type: ADVERTISE_UPDATE_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        console.log("userinfo", userInfo.token)


        const { data } = await axios.put(
            `http://127.0.0.1:8000/api/advertisement/update/${advertise.id}/${advertise.slug}/`,
            advertise,
            config
        );


        dispatch({
            type: ADVERTISE_UPDATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ADVERTISE_UPDATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}




export const advertiseDeleteAction = (id, slug) => async (dispatch, getState) => {
    try{
        dispatch({ type: ADVERTISE_DELETE_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        console.log("userinfo", userInfo.token)


        const { data } = await axios.delete(
            `http://127.0.0.1:8000/api/advertisement/delete/${id}/${slug}/`,
            
            config
        );


        dispatch({
            type: ADVERTISE_DELETE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ADVERTISE_DELETE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}


// CELEBRITY COMPONENT

export const celebrityListAction = (keyword='') => async (dispatch) => {
    try{
        dispatch({ type: CELEBRITY_LIST_REQUEST });
        const { data } = await axios.get(
            `http://127.0.0.1:8000/api/celebrities/list${keyword}`
        );
        dispatch({
            type: CELEBRITY_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: CELEBRITY_LIST_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const celebrityDetailAction = (id, slug) => async (dispatch) => {
    try{
        dispatch({ type: CELEBRITY_DETAIL_REQUEST });
        const { data } = await axios.get(
            `http://127.0.0.1:8000/api/celebrities/list/${id}/${slug}`
        );
        dispatch({
            type: CELEBRITY_DETAIL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: CELEBRITY_DETAIL_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}


export const celebrityCreateAction = () => async (dispatch, getState) => {
    try{
        dispatch({ type: CELEBRITY_CREATE_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        console.log("userinfo", userInfo.token)


        const { data } = await axios.post(
            `http://127.0.0.1:8000/api/celebrities/create/`,
            {},
            config
        );


        dispatch({
            type: CELEBRITY_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: CELEBRITY_CREATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const celebrityUpdateAction = (celebrity) => async (dispatch, getState) => {
    try{
        dispatch({ type: CELEBRITY_UPDATE_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        console.log("userinfo", userInfo.token)


        const { data } = await axios.put(
            `http://127.0.0.1:8000/api/celebrities/update/${celebrity.id}/${celebrity.slug}/`,
            celebrity,
            config
        );


        dispatch({
            type: CELEBRITY_UPDATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: CELEBRITY_UPDATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}




export const celebrityDeleteAction = (id,slug) => async (dispatch, getState) => {
    try{
        dispatch({ type: CELEBRITY_DELETE_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        console.log("userinfo", userInfo.token)


        const { data } = await axios.delete(
            `http://127.0.0.1:8000/api/celebrities/delete/${id}/${slug}`,
            
            config
        );


        dispatch({
            type: CELEBRITY_DELETE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: CELEBRITY_DELETE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}



// EVENT PORTION

export const eventListAction = (keyword="") => async (dispatch) => {
    try{
        dispatch({ type: EVENT_LIST_REQUEST });
        const { data } = await axios.get(
            `http://127.0.0.1:8000/api/event/list${keyword}`
        );
        dispatch({
            type: EVENT_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: EVENT_LIST_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const eventDetailAction = (id, slug) => async (dispatch) => {
    try{
        dispatch({ type: EVENT_DETAIL_REQUEST });
        const { data } = await axios.get(
            `http://127.0.0.1:8000/api/event/list/${id}/${slug}/`
        );
        dispatch({
            type: EVENT_DETAIL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: EVENT_DETAIL_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}


export const eventCreateAction = () => async (dispatch, getState) => {
    try{
        dispatch({ type: EVENT_CREATE_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        console.log("userinfo", userInfo.token)


        const { data } = await axios.post(
            `http://127.0.0.1:8000/api/event/create/`,
            {},
            config
        );


        dispatch({
            type: EVENT_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: EVENT_CREATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const eventUpdateAction = (event) => async (dispatch, getState) => {
    try{
        dispatch({ type: EVENT_UPDATE_REQUEST });
        
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
            `http://127.0.0.1:8000/api/event/update/${event.id}/${event.slug}/`,
            event,
            config
        );


        dispatch({
            type: EVENT_UPDATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: EVENT_UPDATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}




export const eventDeleteAction = (id, slug) => async (dispatch, getState) => {
    try{
        dispatch({ type: EVENT_DELETE_REQUEST });
        
        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        console.log("userinfo", userInfo.token)


        const { data } = await axios.delete(
            `http://127.0.0.1:8000/api/event/delete/${id}/${slug}/`,
            
            config
        );


        dispatch({
            type: EVENT_DELETE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: EVENT_DELETE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}


// SHOP PORTION

export const shopListAction = (keyword="") => async (dispatch) => {
    try{
        dispatch({ type: SHOP_LIST_REQUEST });
        const { data } = await axios.get(
            `http://127.0.0.1:8000/api/shops/list${keyword}`
        );
        dispatch({
            type: SHOP_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: SHOP_LIST_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const shopDetailAction = (id, slug) => async (dispatch) => {
    try{
        dispatch({ type: SHOP_DETAIL_REQUEST });
        const { data } = await axios.get(
            `http://127.0.0.1:8000/api/shops/list/${id}/${slug}`
        );
        dispatch({
            type: SHOP_DETAIL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: SHOP_DETAIL_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}


export const shopCreateAction = () => async (dispatch, getState) => {
    try{
        dispatch({ type: SHOP_CREATE_REQUEST });
        
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
            `http://127.0.0.1:8000/api/shops/create/`,
            {},
            config
        );


        dispatch({
            type: SHOP_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: SHOP_CREATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const shopUpdateAction = (shop) => async (dispatch, getState) => {
    try{
        dispatch({ type: SHOP_UPDATE_REQUEST });
        
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
            `http://127.0.0.1:8000/api/shops/update/${shop.id}/${shop.slug}/`,
            shop,
            config
        );


        dispatch({
            type: SHOP_UPDATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: SHOP_UPDATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}




export const shopDeleteAction = (id, slug) => async (dispatch, getState) => {
    try{
        dispatch({ type: SHOP_DELETE_REQUEST });
        
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
            `http://127.0.0.1:8000/api/shops/delete/${id}/${slug}/`,
            
            config
        );


        dispatch({
            type: SHOP_DELETE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: SHOP_DELETE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

