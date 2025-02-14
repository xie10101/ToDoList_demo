import React from "react";
import { Input } from "antd";
import classes from "./Search.module.css";
const Search = () => {
    return ( 
        <div>
            <Input className={classes.input}></Input>
        </div>
     );
}
export default Search;