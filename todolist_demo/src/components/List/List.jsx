import React from "react";
import ListItems from "./ListItems/ListItems"; 
import classes from "./List.module.css";
import Search from "../Search/Search";
import { Button,Divider,Modal } from "antd";
import { useState } from "react";
import {Input} from "antd";
import ListContext from "../../store/ListText"
import { useReducer } from "react";
const tasks=[
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
const dones=1;
// 以上为基础数据

// 定义reducer函数：
const reducerList=(state,action)=>{
  // 统一为原始数据设置浅赋值：
  let newList=[...state];
  switch(action.type)
  {
  case "add":
    //实现逻辑
    newList.push({
      task:action.payload,
      done:false,
      id:Date.now()
    });
    return newList;//返回新数据
  case "delete":
    newList=newList.filter((item)=>{
  /*
        if(item.done===true)
        {
          setdonetasks((prestate)=>prestate-1)
        }
       */
        return item.task!==action.payload
    })
    return newList;
   case "search":
    //实现逻辑
  if(action.payload.trim()==="")
  {
  return tasks ;
  }
  newList=newList.filter((item)=>{
     return item.task.includes(action.payload.trim())
   })
    return newList;

   case "finish":
    //实现逻辑
      // 遍历数组：
    let otherlist=[];
    otherlist=newList.map((item)=>{
       console.log(item.task===action.payload)
       if(item.task===action.payload){
         item.done=!item.done;
       }
       return item;
     })
    return otherlist;
   case "delfinish":
      // 过滤函数进行数组的过滤：
      newList=newList.filter((item)=>{
      /*
        if(item.done===true)
        {
          setdonetasks((prestate)=>prestate-1)
        }
      */
      return item.done === false
      })
      return newList;
   default:
    return newList;
  }
// 统一返回新数据 --不再使用set设置
}

const List = () => {

// 使用useReducer对主要list数据进行改写：
const [list,dispatch]=useReducer(reducerList,tasks)
// const  [list,setList]=React.useState(tasks);
const  [newtask,setNewtask]=React.useState("");
const  [donetasks] =React.useState(dones);
// 渲染之后执行-渲染不上

const [isModalOpen, setIsModalOpen] = useState(false);
const showModal = () => {
  setIsModalOpen(true);
};

const handleOk = () => {
  setIsModalOpen(false);
  //执行添加任务操作
  dispatch({type:"add",payload:newtask});
  // 将输入框内容清空:
  setNewtask("");
};

const handleCancel = () => {
  setIsModalOpen(false);
    // 将输入框内容清空:
    setNewtask("");
};

const handleInputChange = (e) => {
  setNewtask(e.target.value);
}

    return (
      <>
      <ListContext.Provider  value={{list,dispatch}}>
        <div className={classes.list}>
          <h1 className={classes.title}>Just To do !</h1>
          <div className={classes.header} >
            <Search></Search>
            <div className="Add"> 
            <Button type="primary" onClick={showModal}>添加</Button>
            </div>
          </div>
          <Divider></Divider>
           <ListItems></ListItems>
          <Divider></Divider>
          <div className={classes.footer}>
            <p className={classes.com}>已完成——{donetasks}/{list.length}</p>
             <Button onClick={()=>{
              dispatch({type:"delfinish"}
              )
            }
             }>删除已完成任务</Button>
          </div>
        </div>
        <Modal title="添加新任务" className={classes.modal} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Input type="text" onChange={handleInputChange} value={newtask} />
        </Modal>
        </ListContext.Provider>
        </>
   );
}
export default List;