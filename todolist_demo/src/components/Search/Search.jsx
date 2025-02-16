import React from "react";
import { Input } from "antd";
import classes from "./Search.module.css";
import { SearchOutlined } from "@ant-design/icons";
const Search = () => {
    return ( 
        <div>
            <Input placeholder="请输入任务" addonBefore={<SearchOutlined />}  className={classes.input}></Input>
        </div>
     );
}
export default Search;