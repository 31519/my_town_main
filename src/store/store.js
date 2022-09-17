import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"

import users from './usersSlice'
import counter from './counterSlice'

const combinedReducer = combineReducers({
    counter,
    users,
})

export const makeStore = () => 
    configureStore( {
            reducer: combinedReducer
        })
;

export const wrapper = createWrapper(makeStore)