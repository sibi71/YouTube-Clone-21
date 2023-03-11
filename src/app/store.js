import { combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import userReducer from "../Slices/userSlice";


const reducer = combineReducers({

    userInfo:userReducer,
})


export const store = configureStore({
    reducer,
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:false
    }),
})