import classes from "./ListItems.module.css";
import Item from "./Item/Item";


const ListItems = (props) => {
    return ( 
        <ul className={classes.items}>
           {props.list.map((item)=><Item {...item} key={item.id} finish={props.finish} del={props.del}></Item>)}  
        </ul>  
 );
}
 
export default ListItems;