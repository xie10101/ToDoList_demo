import React from "react";
import { Input } from "antd";
import classes from "./Search.module.css";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import {searchList} from "../../store/reducer/TasksReducer";
import {useDispatch} from "react-redux";
const Search = (props) => {

// 重新设置的函数使用时需要使用新的函数名
const [target,setTarget] =useState("");

const dispatch=useDispatch();

const handleChangeInput=(e)=>{
    setTarget(e.target.value);    
}
    return ( 
        <div>
            <Input placeholder="请输入任务"  onChange={handleChangeInput} value={target} addonBefore={<SearchOutlined onClick={()=>{
              dispatch(searchList(target));
            }}  />}  className={classes.input}></Input>
        
        </div>
     );
}
export default Search;