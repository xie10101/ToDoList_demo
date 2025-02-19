import classes from "./ListItems.module.css";
import Item from "./Item/Item";
import { useContext } from "react";
import ListContext from "../../../store/ListText"
const ListItems = () => {
    const {list} =useContext(ListContext);
    return ( 
        <ul className={classes.items}>
           {list.map((item)=><Item {...item} key={item.id} ></Item>)}  
        </ul>  
 );
}
 
export default ListItems;