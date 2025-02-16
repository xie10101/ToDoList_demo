import React from "react";
import ListItem from "./ListItems/ListItems"; 
import classes from "./List.module.css";
import Search from "../Search/Search";
import { Button,Divider } from "antd";
 
const List = () => {
//   设计大框架
    return (
        <div className={classes.list}>
          <h1 className={classes.title}>Just To do !</h1>
          <div className={classes.header} >
            <Search></Search>
            <div className="Add"> 
            <Button type="primary">添加</Button>
            </div>
          </div>
          <Divider></Divider>
          <ListItem></ListItem>
          <Divider></Divider>
          <div className={classes.footer}>
            <p className={classes.com}>已完成——0/3</p>
             <Button>删除已完成任务</Button>
          </div>
        </div>
      );
}
 
export default List;