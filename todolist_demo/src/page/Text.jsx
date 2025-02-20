import React from 'react';
import classes from './Text.module.css';
const Text = () => {
    return (
      
        <div className={classes.body}>
        <h1>Hello,</h1>
        <h2>We create designs everyone
          <span style={{color:"rgba(123, 222, 251, 1)"}}>loves.</span>
        </h2>
        <p>
        We were put on this earth to help you squeeze every last shred of value out of your digital road-map .
        </p>
     </div>
      );
}
export default Text;