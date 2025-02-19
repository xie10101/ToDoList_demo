import {CloseSquareFilled,CheckSquareOutlined} from "@ant-design/icons"; 
import classes from "./Item.module.css"
import { Divider } from "antd";
import { useContext } from "react";
import ListContext from "../../../../store/ListText";
const Item = (props) => {
const {dispatch} =useContext(ListContext);
    return (  
        <>
        <li>
        <div className={classes.task}>
            <p className={props.done ? (classes.txt + " "+ classes.del):classes.txt  }>{props.task}</p> 
            <div>
            <CheckSquareOutlined className={classes.less} onClick={(e)=>{e.stopPropagation(); dispatch({type:"finish",payload:props.task})}}/>
            <CloseSquareFilled className={classes.less} onClick={(e)=>{e.stopPropagation();dispatch({type:"delete",payload:props.task})}} />
            </div>
        </div>  
      </li>
      <Divider className={classes.Divider} dashed />
      </>
    );
}
 
export default Item;