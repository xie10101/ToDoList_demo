import React from "react";
import { Input } from "antd";
import classes from "./Search.module.css";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useContext } from "react";
import ListContext from "../../store/ListText";

const Search = (props) => {
// useContext的使用：
const {dispatch} =useContext(ListContext);
// 重新设置的函数使用时需要使用新的函数名
const [target,setTarget] =useState("");
const handleChangeInput=(e)=>{
    setTarget(e.target.value);    
}
    return ( 
        <div>
            <Input placeholder="请输入任务"  onChange={handleChangeInput} value={target} addonBefore={<SearchOutlined onClick={()=>{
              dispatch({type:"search",payload:target});
            }}  />}  className={classes.input}></Input>
        
        </div>
     );
}
export default Search;