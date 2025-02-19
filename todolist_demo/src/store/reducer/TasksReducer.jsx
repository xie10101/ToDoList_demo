//创建切片：
import { createSlice } from "@reduxjs/toolkit";

const tasksSlice=createSlice({
    name:'list',
    initialState:
    {
       tasks: [
            {task:"做数学作业",done:false,id:12},
            {task:"做文作业",done:false,id:22},
            {task:"做语作业",done:true,id:32},
            {task:"做学作业",done:false,id:42},
            {task:"做语文作业",done:false,id:52},
            {task:"做英语作业",done:true,id:62},
            {task:"做数学业",done:false,id:72},
            {task:"做语文业",done:false,id:82},
            {task:"做英语业",done:true,id:92}
          ]
    },
    // 执行函数
    reducers:{
        addList(state,action){
            state.tasks.push({
                task:action.payload,
                done:false,
                id:Date.now()
              });
      // 没有操作实际的state
      // Redux Toolkit 允许在 reducers 中编写 "mutating" 逻辑。
      // 它实际上并没有改变 state，因为使用的是 Immer 库，检测到“草稿 state”的变化并产生一个全新的
      // 基于这些更改的不可变的 state。
        },
        deleteList(state,action){
            state.tasks= state.tasks.filter((item)=>{
                      return item.task!==action.payload })
        },
        searchList(state,action){
            if(action.payload.trim()==="")
                {
                    return
                }
                state.tasks= state.tasks.filter((item)=>{
             return item.task.includes(action.payload.trim())
         })
        },
        finishList(state,action){
            state.tasks= state.tasks.map((item)=>{
                if(item.task===action.payload){
                  item.done=!item.done;
                }
                return item;
              })
        },
        delFinishList(state,action){
            state.tasks= state.tasks.filter((item)=>{
                return item.done === false
                })
        }
    }
});
// 创建后的导出：

export default  tasksSlice;
export const {addList,deleteList,searchList,finishList,delFinishList}=tasksSlice.actions;
