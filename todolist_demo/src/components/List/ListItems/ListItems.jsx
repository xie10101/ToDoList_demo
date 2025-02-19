import classes from "./ListItems.module.css";
import Item from "./Item/Item";
import { useSelector } from "react-redux";
const ListItems = () => {

    const list=useSelector((state)=>state.list.tasks);
    return ( 
        <ul className={classes.items}>
           {list.map((item)=><Item {...item} key={item.id} ></Item>)}  
        </ul>  
 );
}
 
export default ListItems;