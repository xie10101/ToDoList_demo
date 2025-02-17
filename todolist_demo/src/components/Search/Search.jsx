import React from "react";
import { Input } from "antd";
import classes from "./Search.module.css";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
const Search = (props) => {
const [target,setTarget] =useState("");
const handleChangeInput=(e)=>{
    setTarget(e.target.value);    
}
    return ( 
        <div>
            <Input placeholder="请输入任务"  onChange={handleChangeInput} value={target} addonBefore={<SearchOutlined onClick={()=>{
                props.search(target)
                console.log(target)
            }}  />}  className={classes.input}></Input>
        </div>
     );
}
export default Search;