import React from 'react';
import classes from './Note.module.css';
import { Button } from 'antd';
const Note = () => {
    return (
        <div className={classes.note}>
            <Button type='primary'> 
                Note
            </Button>
        </div>
      );
}
 
export default Note;