import React from "react";
import ListItems from "./ListItems/ListItems"; 
import classes from "./List.module.css";
import Search from "../Search/Search";
import { Button,Divider,Modal } from "antd";
import { useState } from "react";
import {Input} from "antd";
import { addList,delFinishList } from "../../store/reducer/TasksReducer";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const dones=1;
const List = () => {

const  [newtask,setNewtask]=React.useState("");
const  [donetasks] =React.useState(dones);
// 渲染之后执行-渲染不上
const [isModalOpen, setIsModalOpen] = useState(false);
//RTK仓库数据的使用：
const list =useSelector((state)=>state.list.tasks);
const dispatch = useDispatch();
const showModal = () => {
  setIsModalOpen(true);
};

const handleOk = () => {
  setIsModalOpen(false);
  //执行添加任务操作
  dispatch(addList(newtask));
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
        <div className={classes.list}>
         <Outlet></Outlet>
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
              dispatch(delFinishList()
              )
            }
             }>删除已完成任务</Button>
          </div>
        </div>
        
        <Modal title="添加新任务" className={classes.modal} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Input type="text" onChange={handleInputChange} value={newtask} />
        </Modal>
        </>
   );
}
export default List;