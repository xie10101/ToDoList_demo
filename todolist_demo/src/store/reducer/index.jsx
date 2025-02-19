//用于设置reducer仓库
import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from './TasksReducer';
const store = configureStore({
    reducer: {
        //设置仓库
        list: tasksSlice.reducer
    }
})
export default store;