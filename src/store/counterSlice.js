import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    count: 31519
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // Action
        increment: (state) => {
            state.count = state.count+1;
        }
    }
})


export const { increment} = counterSlice.actions
export default counterSlice.reducer