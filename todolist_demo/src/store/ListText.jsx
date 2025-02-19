//useContext尝试
import React from "react";

const ListContext = React.createContext(
    {
        // 基础数据
        list: [],
        dispatch:()=>{
        }
    }
);
export default ListContext;
