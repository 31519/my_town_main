import {


    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    
    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,


    USER_DETAIL_REQUEST,
    USER_DETAIL_SUCCESS,
    USER_DETAIL_FAIL,
    USER_DETAIL_RESET,
  
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL,
    USER_UPDATE_RESET,
  
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,
    USER_DELETE_RESET,

    // PROFILE PORTIONS
    
    PROFILE_LIST_REQUEST,
    PROFILE_LIST_SUCCESS,
    PROFILE_LIST_FAIL,

    PROFILE_DETAIL_REQUEST,
    PROFILE_DETAIL_SUCCESS,
    PROFILE_DETAIL_FAIL,
    PROFILE_DETAIL_RESET,

    PROFILE_UPDATE_REQUEST,
    PROFILE_UPDATE_SUCCESS,
    PROFILE_UPDATE_FAIL,
    PROFILE_UPDATE_RESET,


  } from "../constants/userConstants";
  
import axios from 'axios'  

export const userLoginActions = (username, password) => async (dispatch) => {
    try{
        dispatch({type: USER_LOGIN_REQUEST});

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const {data} = await axios.post(
            "http://127.0.0.1:8000/api/users/login/",
            {username, password},
            config
        )
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userLogin', JSON.stringify(data))

    }  catch (error) {
        dispatch({
          type: USER_LOGIN_FAIL,
          payload:
            error.response && error.response.data.detail
              ? error.response.data.detail
              : error.message,
        });
    }
}
export const userRegisterActions = (
    username, 
    email, 
    password, 
    password2,
    firstName,
    lastName,
    gender="",
    country="",
    state="",
    town="",
    pincode=0,
    phoneNumber="",
    profession=""
    ) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const {data} = await axios.post(
            "http://127.0.0.1:8000/api/users/user-register/",
            ({
                username, 
                email, 
                password, 
                password2,
                firstName,
                lastName,
                gender,
                country,
                state,
                town,
                pincode,
                phoneNumber,
                profession
            }),
            // {'username':username, 'email':email, 'password':password, 'password2':password2},
            config
        )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        // dispatch({
        //     type: USER_LOGIN_SUCCESS,
        //     payload: data
        // })

        // localStorage.setItem('userLogin', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const userLogoutActions = () => async (dispatch) =>{
    localStorage.removeItem('userLogin')
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: PROFILE_DETAIL_RESET})
    // dispatch({ type: ORDER_LIST_MY_RESET })
    // dispatch({ type: USER_LIST_RESET })
}

export const userListActions = () => async ( dispatch, getState) => {
    try {
        dispatch({
            type: USER_LIST_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()
        
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        console.log("here user")
        const { data } = await axios.get(
            `http://127.0.0.1:8000/api/users/users-list/`,
            config
        );

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const userDetailActions = (id) => async ( dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAIL_REQUEST
        })

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
            `http://127.0.0.1:8000/api/users/users-detail/${id}/`,
            config
        );

        dispatch({
            type: USER_DETAIL_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: USER_DETAIL_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const userDeleteActions = (id) => async ( dispatch, getState) => {
    try {
        dispatch({
            type: USER_DELETE_REQUEST
        })

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
            `http://127.0.0.1:8000/api/users/users-delete/${id}/`,
            config
        );

        dispatch({
            type: USER_DELETE_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: USER_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const userUpdateActions = (user) => async ( dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_REQUEST
        })

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
            `http://127.0.0.1:8000/api/users/users-update/${user.id}/`,
            user,
            config
        );

        dispatch({
            type: USER_UPDATE_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


// PROFILE PORTIONS



export const profileListActions = () => async ( dispatch, getState) => {
    try {
        dispatch({
            type: PROFILE_LIST_REQUEST
        })

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
            `http://127.0.0.1:8000/api/users/profile-list/`,
            config
        );

        dispatch({
            type: PROFILE_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: PROFILE_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const profileDetailActions = () => async ( dispatch, getState) => {
    try {
        dispatch({
            type: PROFILE_DETAIL_REQUEST
        })

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
            `http://127.0.0.1:8000/api/users/profile-detail/`,
            config
        );

        dispatch({
            type: PROFILE_DETAIL_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: PROFILE_DETAIL_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const profileUpdateActions = (profile) => async ( dispatch, getState) => {
    try {
        dispatch({
            type: PROFILE_UPDATE_REQUEST
        })

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
            `http://127.0.0.1:8000/api/users/profile-update/${profile.id}/`,
            profile,
            config
        );

        dispatch({
            type: PROFILE_UPDATE_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: PROFILE_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

