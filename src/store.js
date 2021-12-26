import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    techListReducer,
    createTechReducer,
} from '../src/reducers/techReducers'

import {
    userLoginReducer,
    userRegisterReducer,
    userListReducer,
    userDetailReducer,
    userDeleteReducer,
    userUpdateReducer,

    // PROFILE PORTIONS

    profileListReducer,
    profileDetailReducer,
    profileUpdateReducer,

} from '../src/reducers/userReducers'

import {
    advertiseListReducer,
    advertiseDetailReducer,
    advertiseCreateReducer,
    advertiseUpdateReducer,
    advertiseDeleteReducer,

    // CELEBRITY PORTION
    celebrityListReducer,
    celebrityDetailReducer,
    celebrityCreateReducer,
    celebrityUpdateReducer,
    celebrityDeleteReducer,

    // EVENT PORTION
    eventListReducer,
    eventDetailReducer,
    eventCreateReducer,
    eventUpdateReducer,
    eventDeleteReducer,

    
    // SHOP PORTION
    shopListReducer,
    shopDetailReducer,
    shopCreateReducer,
    shopUpdateReducer,
    shopDeleteReducer,


} from '../src/reducers/productivityReducers'


import {


    // HOTEL PORTION
    hotelListReducer,
    hotelDetailReducer,
    hotelCreateReducer,
    hotelUpdateReducer,
    hotelDeleteReducer,

    // RESELLER PORTION
    resellerListReducer,
    resellerDetailReducer,
    resellerCreateReducer,
    resellerUpdateReducer,
    resellerDeleteReducer,

    // TOURISMS PORTION
    tourismsListReducer,
    tourismsDetailReducer,
    tourismsCreateReducer,
    tourismsUpdateReducer,
    tourismsDeleteReducer,


    // JOBS PORTION
    jobListReducer,
    jobDetailReducer,
    jobCreateReducer,
    jobUpdateReducer,
    jobDeleteReducer,


    


} from '../src/reducers/productivityReducers2'





const reducer = combineReducers({
    techList: techListReducer,
    techCreate:createTechReducer,

    // USERS
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userList:userListReducer,
    userDetail: userDetailReducer,
    userUpdate: userUpdateReducer,
    userDelete: userDeleteReducer,

    // PROFILE PORTION

    profileList: profileListReducer,
    profileDetail: profileDetailReducer,
    profileUpdate: profileUpdateReducer,


    advertiseList:advertiseListReducer,
    advertiseDetail:advertiseDetailReducer,
    advertiseCreate:advertiseCreateReducer,
    advertiseUpdate: advertiseUpdateReducer,
    advertiseDelete: advertiseDeleteReducer,

    // CELEBRITY PORTION
    celebrityList: celebrityListReducer,
    celebrityDetail: celebrityDetailReducer,
    celebrityCreate:celebrityCreateReducer,
    celebrityUpdate: celebrityUpdateReducer,
    celebrityDelete: celebrityDeleteReducer,

    // EVENT PORTION
    eventList: eventListReducer,
    eventDetail: eventDetailReducer,
    eventUpdate: eventUpdateReducer,
    eventDelete: eventDeleteReducer,
    eventCreate:eventCreateReducer,


    // HOTEL PORTION
    hotelList:   hotelListReducer,
    hotelDetail: hotelDetailReducer,
    hotelUpdate: hotelUpdateReducer,
    hotelDelete: hotelDeleteReducer,
    hotelCreate: hotelCreateReducer,

    // SHOP PORTION
    shopList:   shopListReducer,
    shopDetail: shopDetailReducer,
    shopUpdate: shopUpdateReducer,
    shopDelete: shopDeleteReducer,
    shopCreate: shopCreateReducer,

    // RESELLER PORTION
    resellerList:   resellerListReducer,
    resellerDetail: resellerDetailReducer,
    resellerUpdate: resellerUpdateReducer,
    resellerDelete: resellerDeleteReducer,
    resellerCreate: resellerCreateReducer,

    // TOURISMS PORTION
    tourismsList:   tourismsListReducer,
    tourismsDetail: tourismsDetailReducer,
    tourismsUpdate: tourismsUpdateReducer,
    tourismsDelete: tourismsDeleteReducer,
    tourismsCreate: tourismsCreateReducer,


    // JOB PORTION
    jobList:   jobListReducer,
    jobDetail: jobDetailReducer,
    jobUpdate: jobUpdateReducer,
    jobDelete: jobDeleteReducer,
    jobCreate: jobCreateReducer,


})

const userInfoFromStorage = localStorage.getItem('userLogin') ? 
    JSON.parse(localStorage.getItem('userLogin')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage},
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store