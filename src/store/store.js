import { configureStore} from '@reduxjs/toolkit'
import userReducer from '../slice/userSlice'
import user from '../pages/user'

export const store = configureStore({
    reducer:{
        userInfo:userReducer
    }
}) 

export default store