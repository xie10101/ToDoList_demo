import {CloseSquareFilled,CheckSquareOutlined} from "@ant-design/icons"; 
import classes from "./Item.module.css"
import { Divider } from "antd";
import { useDispatch } from "react-redux";
import { deleteList,finishList } from "../../../../store/reducer/TasksReducer";
const Item = (props) => {
const dispatch=useDispatch();
    return (  
        <>
        <li>
        <div className={classes.task}>
            <p className={props.done ? (classes.txt + " "+ classes.del):classes.txt  }>{props.task}</p> 
            <div>
            <CheckSquareOutlined className={classes.less} onClick={(e)=>{e.stopPropagation(); dispatch(finishList(props.task))}}/>
            <CloseSquareFilled className={classes.less} onClick={(e)=>{e.stopPropagation();dispatch(deleteList(props.task))}} />
            </div>
        </div>  
      </li>
      <Divider className={classes.Divider} dashed />
      </>
    );
}
 
export default Item;