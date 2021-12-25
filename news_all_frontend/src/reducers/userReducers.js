import {

  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_RESET,

  USER_LOGOUT,

  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_RESET,

  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,

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


export const userLoginReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_LOGIN_REQUEST:
            return {loading:true}

        case USER_LOGIN_SUCCESS:
            return {loading:false, userInfo:action.payload}

        case USER_LOGIN_FAIL:
            return {loading:false, error:action.payload}

        case USER_LOGIN_RESET:
            return {}

        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_REGISTER_REQUEST:
            return {loading:true}

        case USER_REGISTER_SUCCESS:
            return {loading:false, userInfo:action.payload, success:true}

        case USER_REGISTER_FAIL:
            return {loading:false, error:action.payload}

        case USER_REGISTER_RESET:
            return {}

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}

export const userListReducer = (state = {users:[]}, action) => {
    switch(action.type) {
        case USER_LIST_REQUEST:
            return {loading:true}

        case USER_LIST_SUCCESS:
            return {loading:false, users:action.payload}

        case USER_LIST_FAIL:
            return {loading:false, error:action.payload}


        default:
            return state
    }
}

export const userDetailReducer = (state = {user:[]}, action) => {
    switch(action.type) {
        case USER_DETAIL_REQUEST:
            return {loading:true}

        case USER_DETAIL_SUCCESS:
            return {loading:false, user:action.payload}

        case USER_DETAIL_FAIL:
            return {loading:false, error:action.payload}

        case USER_DETAIL_RESET:
            return {}

        default:
            return state
    }
}


export const userUpdateReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_UPDATE_REQUEST:
            return {loading:true}

        case USER_UPDATE_SUCCESS:
            return {loading:false, user:action.payload, success:true}

        case USER_UPDATE_FAIL:
            return {loading:false, error:action.payload}

        case USER_UPDATE_RESET:
            return {}

        default:
            return state
    }
}


export const userDeleteReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_DELETE_REQUEST:
            return {loading:true}

        case USER_DELETE_SUCCESS:
            return {loading:false, userInfo:action.payload, success:true}

        case USER_DELETE_FAIL:
            return {loading:false, error:action.payload}

        case USER_DELETE_RESET:
            return {}


        default:
            return state
    }
}


// PROFILE PORTION

export const profileListReducer = (state = {profiles:[]}, action) => {
    switch(action.type) {
        case PROFILE_LIST_REQUEST:
            return {loading:true}

        case PROFILE_LIST_SUCCESS:
            return {loading:false, profiles:action.payload}

        case PROFILE_LIST_FAIL:
            return {loading:false, error:action.payload}


        default:
            return state
    }
}


export const profileDetailReducer = (state = {profile:[]}, action) => {
    switch(action.type) {
        case PROFILE_DETAIL_REQUEST:
            return {loading:true}

        case PROFILE_DETAIL_SUCCESS:
            return {loading:false, profile:action.payload}

        case PROFILE_DETAIL_FAIL:
            return {loading:false, error:action.payload}

        case PROFILE_DETAIL_RESET:
            return {}

        default:
            return state
    }

}


export const profileUpdateReducer = (state = {}, action) => {
    switch(action.type) {
        case PROFILE_UPDATE_REQUEST:
            return {loading:true}

        case PROFILE_UPDATE_SUCCESS:
            return {loading:false, profile:action.payload, success:true}

        case PROFILE_UPDATE_FAIL:
            return {loading:false, error:action.payload}

        case PROFILE_UPDATE_RESET:
            return {}

        default:
            return state
    }
}
