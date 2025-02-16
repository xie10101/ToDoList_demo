import classes from "./ListItems.module.css";
import Item from "./Item/Item";
const List=[
  {task:"做数学作业",done:false},
  {task:"做语文作业",done:false},
  {task:"做英语作业",done:true}
]
const ListItem = () => {
    return ( 
        <ul className={classes.items}>
           {List.map((item)=><Item {...item}></Item>)}  
        </ul>  
 );
}
 
export default ListItem;