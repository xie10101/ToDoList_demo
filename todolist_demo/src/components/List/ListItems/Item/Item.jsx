import {CloseSquareFilled,CheckSquareOutlined} from "@ant-design/icons"; 
import classes from "./Item.module.css"
import { Divider } from "antd";
const Item = (props) => {
    return (  
        <>
        <li>
        <div className={classes.task}>
            <p className={props.done ? (classes.txt + " "+ classes.del):classes.txt  }>{props.task}</p> 
            <div>
            <CheckSquareOutlined className={classes.less} onClick={(e)=>{e.stopPropagation();props.finish(props.task)}}/>
            <CloseSquareFilled className={classes.less} onClick={(e)=>{e.stopPropagation();props.del(props.task)}} />
            </div>
        </div>  
      </li>
      <Divider className={classes.Divider} dashed />
      </>
    );
}
 
export default Item;