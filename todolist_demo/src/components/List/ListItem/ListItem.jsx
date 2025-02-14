import classes from "./ListItem.module.css";
const ListItem = () => {
    return ( <div className={classes.item}>
                <div>
        <ul className={classes.item}>
            <li>1
            </li>
            <li>2</li>
            <li>3</li>
          </ul>  
        </div>
    </div> );
}
 
export default ListItem;