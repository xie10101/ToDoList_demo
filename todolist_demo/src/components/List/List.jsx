import React from "react";
import ListItem from "./ListItem/ListItem"; 
import classes from "./List.module.css";
import Search from "../Search/Search";
import { Button } from "antd";
const List = () => {
//   设计大框架
    return (
        <div className={classes.list}>
          <h1>List</h1>
          
           <Search></Search>
           <div className="Add"> 
           </div>
           <ListItem></ListItem>
          <div>
            <p>已完成0/3</p>
             <Button>删除已完成任务</Button>
          </div>
        </div>
      );
}
 
export default List;