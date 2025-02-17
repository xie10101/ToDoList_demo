import React from "react";
import ListItems from "./ListItems/ListItems"; 
import classes from "./List.module.css";
import Search from "../Search/Search";
import { Button,Divider,Modal } from "antd";
import { useState } from "react";
import {Input} from "antd";
const tasks=[
  {task:"做数学作业",done:false,id:12},
  {task:"做语文作业",done:false,id:22},
  {task:"做英语作业",done:true,id:32}
]

const List = () => {
const  [list,setList]=React.useState(tasks);
const  [newtask,setNewtask]=React.useState("");
const [donetasks,setdonetasks] =React.useState(1);
// 渲染之后执行-渲染不上
// useEffect(
//   ()=>{
//    list.forEach((item)=>{
//   if(item.done===true)
//   {
//     done_tasks++
//   }
//    })
//   console.log(done_tasks)
//   },[list,done_tasks]
// )


const addList =(dec)=>{
  const newList=list;//进行浅拷贝；
  newList.push({
    task:dec,
    done:false,
    id:Math.random()
  });
  setList(newList);
}

const [isModalOpen, setIsModalOpen] = useState(false);

const showModal = () => {
  setIsModalOpen(true);
};

const handleOk = () => {
  setIsModalOpen(false);
  //执行添加任务操作
  addList(newtask);
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

// 删除操作：
const deleteTask=(task)=>{
//对操作数据进行浅赋值：
let newlist=list;
// 过滤函数进行数组的过滤：
newlist=newlist.filter((item)=>{
return item.task!==task
// 返回值为true/false item数据保存/舍弃
})
setList(newlist);
//取消冒泡
}

// 完成操作设置：
const finishTask=(task)=>{
  // 浅拷贝：
  let newlist=list;
  // 遍历数组：
  newlist=newlist.map((item)=>{
    if(item.task===task){
      item.done=!item.done;
      if(item.done===true)
      {
        setdonetasks((prestate)=>prestate+1)
      }
    }
    return item;
  })
  setList(newlist);
}

//搜索操作：
const searchTask=(target)=>{
let newList=list;
if(target.trim()==="")
{
 setList(tasks)
return ;
}
newList=newList.filter((item)=>{
  return item.task.includes(target.trim())
})
setList(newList);

}

const delFinsh=(e)=>{
  //对操作数据进行浅赋值：
let newlist=list;
// 过滤函数进行数组的过滤：
newlist=newlist.filter((item)=>{
return item.done === false
})
setList(newlist);
}
    return (
      <>
        <div className={classes.list}>
          <h1 className={classes.title}>Just To do !</h1>
          <div className={classes.header} >
            <Search search={searchTask}></Search>
            <div className="Add"> 
            <Button type="primary" onClick={showModal}>添加</Button>
            </div>
          </div>
          <Divider></Divider>
           <ListItems list={list} finish={finishTask} del={deleteTask}></ListItems>
          <Divider></Divider>
          <div className={classes.footer}>
            <p className={classes.com}>已完成——{donetasks}/{list.length}</p>
             <Button onClick={
              delFinsh
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