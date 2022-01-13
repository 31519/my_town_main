import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    techListReducer,
    healthListReducer,
    businessListReducer,
    scienceListReducer,

    techDetailReducer,

    createTechReducer,
    createScienceReducer,
    createHealthReducer,
    createBusinessReducer,
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
    advertiseUserListReducer,
    advertiseDetailReducer,
    advertiseCreateReducer,
    advertiseUpdateReducer,
    advertiseDeleteReducer,

    // CELEBRITY PORTION
    celebrityListReducer,
    celebrityUserListReducer,
    celebrityDetailReducer,
    celebrityCreateReducer,
    celebrityUpdateReducer,
    celebrityDeleteReducer,

    // EVENT PORTION
    eventListReducer,
    eventUserListReducer,
    eventDetailReducer,
    eventCreateReducer,
    eventUpdateReducer,
    eventDeleteReducer,

    
    // SHOP PORTION
    shopListReducer,
    shopUserListReducer,
    shopDetailReducer,
    shopCreateReducer,
    shopUpdateReducer,
    shopDeleteReducer,


    // MEME PORTION
    memeListReducer,
    memeUserListReducer,
    memeDetailReducer,
    memeCreateReducer,
    memeUpdateReducer,
    memeDeleteReducer,

    // MEME PORTION
    localListReducer,
    localUserListReducer,
    localDetailReducer,
    localCreateReducer,
    localUpdateReducer,
    localDeleteReducer,

    // FORM PORTION
    formListReducer,
    formDetailReducer,
    formCreateReducer,
    formUpdateReducer,

    // BANNER PORTION
    bannerListReducer,

} from '../src/reducers/productivityReducers'


import {


    // HOTEL PORTION
    hotelListReducer,
    hotelUserListReducer,
    hotelDetailReducer,
    hotelCreateReducer,
    hotelUpdateReducer,
    hotelDeleteReducer,

    // RESELLER PORTION
    resellerListReducer,
    resellerUserListReducer,
    resellerDetailReducer,
    resellerCreateReducer,
    resellerUpdateReducer,
    resellerDeleteReducer,

    // TOURISMS PORTION
    tourismsListReducer,
    tourismsUserListReducer,
    tourismsDetailReducer,
    tourismsCreateReducer,
    tourismsUpdateReducer,
    tourismsDeleteReducer,

    // JOBS PORTION
    jobListReducer,
    jobUserListReducer,
    jobDetailReducer,
    jobCreateReducer,
    jobUpdateReducer,
    jobDeleteReducer,


} from '../src/reducers/productivityReducers2'


const reducer = combineReducers({
    techList: techListReducer,
    healthList: healthListReducer,
    businessList: businessListReducer,
    scienceList: scienceListReducer,

    techDetail: techDetailReducer,


    techCreate:createTechReducer,
    businessCreate:createBusinessReducer,
    healthCreate:createHealthReducer,
    scienceCreate: createScienceReducer,


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
    advertiseUserList:advertiseUserListReducer,
    advertiseDetail:advertiseDetailReducer,
    advertiseCreate:advertiseCreateReducer,
    advertiseUpdate: advertiseUpdateReducer,
    advertiseDelete: advertiseDeleteReducer,

    // CELEBRITY PORTION
    celebrityList: celebrityListReducer,
    celebrityUserList: celebrityUserListReducer,
    celebrityDetail: celebrityDetailReducer,
    celebrityCreate:celebrityCreateReducer,
    celebrityUpdate: celebrityUpdateReducer,
    celebrityDelete: celebrityDeleteReducer,

    // EVENT PORTION
    eventList: eventListReducer,
    eventUserList: eventUserListReducer,
    eventDetail: eventDetailReducer,
    eventUpdate: eventUpdateReducer,
    eventDelete: eventDeleteReducer,
    eventCreate:eventCreateReducer,

    // HOTEL PORTION
    hotelList:   hotelListReducer,
    hotelUserList:   hotelUserListReducer,
    hotelDetail: hotelDetailReducer,
    hotelUpdate: hotelUpdateReducer,
    hotelDelete: hotelDeleteReducer,
    hotelCreate: hotelCreateReducer,

    // SHOP PORTION
    shopList:   shopListReducer,
    shopUserList:   shopUserListReducer,
    shopDetail: shopDetailReducer,
    shopUpdate: shopUpdateReducer,
    shopDelete: shopDeleteReducer,
    shopCreate: shopCreateReducer,

    // LOCAL PORTION
    localList:   localListReducer,
    localUserList:   localUserListReducer,
    localDetail: localDetailReducer,
    localUpdate: localUpdateReducer,
    localDelete: localDeleteReducer,
    localCreate: localCreateReducer,

    // SHOP PORTION
    memeList:   memeListReducer,
    memeUserList:   memeUserListReducer,
    memeDetail: memeDetailReducer,
    memeUpdate: memeUpdateReducer,
    memeDelete: memeDeleteReducer,
    memeCreate: memeCreateReducer,

    // FORM PORTION
    formList:   formListReducer,
    formDetail: formDetailReducer,
    formUpdate: formUpdateReducer,
    formCreate: formCreateReducer,

    // BANNER PORTION
    bannerList:   bannerListReducer,

    // RESELLER PORTION
    resellerList:   resellerListReducer,
    resellerUserList:   resellerUserListReducer,
    resellerDetail: resellerDetailReducer,
    resellerUpdate: resellerUpdateReducer,
    resellerDelete: resellerDeleteReducer,
    resellerCreate: resellerCreateReducer,

    // TOURISMS PORTION
    tourismsList:   tourismsListReducer,
    tourismsUserList:   tourismsUserListReducer,
    tourismsDetail: tourismsDetailReducer,
    tourismsUpdate: tourismsUpdateReducer,
    tourismsDelete: tourismsDeleteReducer,
    tourismsCreate: tourismsCreateReducer,


    // JOB PORTION
    jobList:   jobListReducer,
    jobUserList:   jobUserListReducer,
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