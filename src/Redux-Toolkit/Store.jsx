import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './Slice'

const store = configureStore({
    reducer: {
        addsCart: cardReducer
    }
})

export default store;