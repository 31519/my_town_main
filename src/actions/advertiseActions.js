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

    // MEME PORTION
    MEME_LIST_REQUEST,
    MEME_LIST_SUCCESS,
    MEME_LIST_FAIL,

    MEME_DETAIL_REQUEST,
    MEME_DETAIL_SUCCESS,
    MEME_DETAIL_FAIL,

    MEME_CREATE_REQUEST,
    MEME_CREATE_SUCCESS,
    MEME_CREATE_FAIL,
    MEME_CREATE_RESET,

    MEME_UPDATE_REQUEST,
    MEME_UPDATE_SUCCESS,
    MEME_UPDATE_FAIL,
    MEME_UPDATE_RESET,

    MEME_DELETE_REQUEST,
    MEME_DELETE_SUCCESS,
    MEME_DELETE_FAIL,
    MEME_DELETE_RESET,



    // MEME PORTION
    LOCAL_LIST_REQUEST,
    LOCAL_LIST_SUCCESS,
    LOCAL_LIST_FAIL,
    LOCAL_DETAIL_REQUEST,
    LOCAL_DETAIL_SUCCESS,
    LOCAL_DETAIL_FAIL,
    LOCAL_CREATE_REQUEST,
    LOCAL_CREATE_SUCCESS,
    LOCAL_CREATE_FAIL,
    LOCAL_CREATE_RESET,
    LOCAL_UPDATE_REQUEST,
    LOCAL_UPDATE_SUCCESS,
    LOCAL_UPDATE_FAIL,
    LOCAL_UPDATE_RESET,
    LOCAL_DELETE_REQUEST,
    LOCAL_DELETE_SUCCESS,
    LOCAL_DELETE_FAIL,
    LOCAL_DELETE_RESET,

    // FORM PORTION
    FORM_LIST_REQUEST,
    FORM_LIST_SUCCESS,
    FORM_LIST_FAIL,

    FORM_DETAIL_REQUEST,
    FORM_DETAIL_SUCCESS,
    FORM_DETAIL_FAIL,

    FORM_CREATE_REQUEST,
    FORM_CREATE_SUCCESS,
    FORM_CREATE_FAIL,
    FORM_CREATE_RESET,

    FORM_UPDATE_REQUEST,
    FORM_UPDATE_SUCCESS,
    FORM_UPDATE_FAIL,
    FORM_UPDATE_RESET,

    // BANNER PORTION
    BANNER_LIST_REQUEST,
    BANNER_LIST_SUCCESS,
    BANNER_LIST_FAIL,


} from '../constants/productivityConstants'

import axios from 'axios'

// ADVERTISEMENT PORTION

export const advertiseListAction = (keyword = '') => async (dispatch) => {
    try{
        dispatch({ type: ADVERTISE_LIST_REQUEST });
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/advertisement/list${keyword}`
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
            `${process.env.REACT_APP_PORT}/api/advertisement/list/${id}/${slug}`
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
            `${process.env.REACT_APP_PORT}/api/advertisement/create/`,
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
            `${process.env.REACT_APP_PORT}/api/advertisement/update/${advertise.id}/${advertise.slug}/`,
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
            `${process.env.REACT_APP_PORT}/api/advertisement/delete/${id}/${slug}/`,
            
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
            `${process.env.REACT_APP_PORT}/api/celebrities/list${keyword}`
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
            `${process.env.REACT_APP_PORT}/api/celebrities/list/${id}/${slug}`
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
            `${process.env.REACT_APP_PORT}/api/celebrities/create/`,
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
            `${process.env.REACT_APP_PORT}/api/celebrities/update/${celebrity.id}/${celebrity.slug}/`,
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
            `${process.env.REACT_APP_PORT}/api/celebrities/delete/${id}/${slug}`,
            
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
            `${process.env.REACT_APP_PORT}/api/event/list${keyword}`
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
            `${process.env.REACT_APP_PORT}/api/event/list/${id}/${slug}/`
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
            `${process.env.REACT_APP_PORT}/api/event/create/`,
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
            `${process.env.REACT_APP_PORT}/api/event/update/${event.id}/${event.slug}/`,
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
            `${process.env.REACT_APP_PORT}/api/event/delete/${id}/${slug}/`,
            
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

export const shopListAction = (keyword="") => async (dispatch, getState) => {
    try{
        dispatch({ type: SHOP_LIST_REQUEST });
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/shops/list${keyword}`
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
            `${process.env.REACT_APP_PORT}/api/shops/list/${id}/${slug}`
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
            `${process.env.REACT_APP_PORT}/api/shops/create/`,
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
            `${process.env.REACT_APP_PORT}/api/shops/update/${shop.id}/${shop.slug}/`,
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
            `${process.env.REACT_APP_PORT}/api/shops/delete/${id}/${slug}/`,
            
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



// MEME PORTION

export const memeListAction = (keyword="") => async (dispatch, getState) => {
    try{
        dispatch({ type: MEME_LIST_REQUEST });
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/meme/list${keyword}`
        );
        dispatch({
            type: MEME_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: MEME_LIST_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const memeDetailAction = (id, slug) => async (dispatch) => {
    try{
        dispatch({ type: MEME_DETAIL_REQUEST });
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/meme/list/${id}/${slug}`
        );
        dispatch({
            type: MEME_DETAIL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: MEME_DETAIL_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}


export const memeCreateAction = () => async (dispatch, getState) => {
    try{
        dispatch({ type: MEME_CREATE_REQUEST });
        
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
            `${process.env.REACT_APP_PORT}/api/meme/create/`,
            {},
            config
        );


        dispatch({
            type: MEME_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: MEME_CREATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const memeUpdateAction = (meme) => async (dispatch, getState) => {
    try{
        dispatch({ type: MEME_UPDATE_REQUEST });
        
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
            `${process.env.REACT_APP_PORT}/api/meme/update/${meme.id}/${meme.slug}/`,
            meme,
            config
        );


        dispatch({
            type: MEME_UPDATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: MEME_UPDATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}




export const memeDeleteAction = (id, slug) => async (dispatch, getState) => {
    try{
        dispatch({ type: MEME_DELETE_REQUEST });
        
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
            `${process.env.REACT_APP_PORT}/api/meme/delete/${id}/${slug}/`,
            
            config
        );


        dispatch({
            type: MEME_DELETE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: MEME_DELETE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}



// LOCAL PORTION

export const localListAction = (keyword="") => async (dispatch, getState) => {
    try{
        dispatch({ type: LOCAL_LIST_REQUEST });
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/localnews/list${keyword}`
        );
        dispatch({
            type: LOCAL_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: LOCAL_LIST_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const localDetailAction = (id, slug) => async (dispatch) => {
    try{
        dispatch({ type: LOCAL_DETAIL_REQUEST });
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/localnews/list/${id}/${slug}`
        );
        dispatch({
            type: LOCAL_DETAIL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: LOCAL_DETAIL_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}


export const localCreateAction = () => async (dispatch, getState) => {
    try{
        dispatch({ type: LOCAL_CREATE_REQUEST });
        
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
            `${process.env.REACT_APP_PORT}/api/localnews/create/`,
            {},
            config
        );


        dispatch({
            type: LOCAL_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: LOCAL_CREATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const localUpdateAction = (local) => async (dispatch, getState) => {
    try{
        dispatch({ type: LOCAL_UPDATE_REQUEST });
        
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
            `${process.env.REACT_APP_PORT}/api/localnews/update/${local.id}/${local.slug}/`,
            local,
            config
        );


        dispatch({
            type: LOCAL_UPDATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: LOCAL_UPDATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}




export const localDeleteAction = (id, slug) => async (dispatch, getState) => {
    try{
        dispatch({ type: LOCAL_DELETE_REQUEST });
        
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
            `${process.env.REACT_APP_PORT}/api/localnews/delete/${id}/${slug}/`,
            
            config
        );


        dispatch({
            type: LOCAL_DELETE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: LOCAL_DELETE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}



// form PORTION

export const formListAction = (keyword="") => async (dispatch, getState) => {
    try{
        dispatch({ type: FORM_LIST_REQUEST });
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/form/list${keyword}`
        );
        dispatch({
            type: FORM_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: FORM_LIST_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}

export const formDetailAction = (id, slug) => async (dispatch) => {
    try{
        dispatch({ type: FORM_DETAIL_REQUEST });
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/form/list/${id}/${slug}`
        );
        dispatch({
            type: FORM_DETAIL_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: FORM_DETAIL_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}



export const formCreateAction = (form) => async (dispatch, getState) => {
    try{
        dispatch({ type: FORM_CREATE_REQUEST });
        
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
            `${process.env.REACT_APP_PORT}/api/form/create/`,
            form,
            config
        );


        dispatch({
            type: FORM_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: FORM_CREATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}


export const formUpdateAction = (form) => async (dispatch, getState) => {
    try{
        dispatch({ type: FORM_UPDATE_REQUEST });
        
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
            `${process.env.REACT_APP_PORT}/api/form/update/${form.id}/${form.slug}/`,
            form,
            config
        );


        dispatch({
            type: FORM_UPDATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: FORM_UPDATE_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}


// banner PORTION

export const bannerListAction = (keyword="") => async (dispatch, getState) => {
    try{
        dispatch({ type: BANNER_LIST_REQUEST });
        const { data } = await axios.get(
            `${process.env.REACT_APP_PORT}/api/meme/banner/list${keyword}`
        );
        dispatch({
            type: BANNER_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: BANNER_LIST_FAIL,
            payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
    })
    }
}
