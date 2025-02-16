import {CloseSquareFilled} from "@ant-design/icons"; 
import classes from "./Item.module.css"
import { Divider } from "antd";
const Item = (props) => {
    return (  
        <>
        <li>
        <div className={classes.task}>
            <p className={classes.txt}>{props.task}</p> 
            <div>
            <CloseSquareFilled className={classes.less} />
            </div>
        </div>  
      </li>
      <Divider className={classes.Divider} dashed />
      </>
    );
}
 
export default Item;