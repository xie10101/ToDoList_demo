import React, { useState } from 'react';
import classes from './index.module.css';
import { YuqueFilled,AppstoreTwoTone  } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
//样式对象的设置：
const Active=
  ({ isActive }) => 
    { return isActive ? { color: "#1677ff" } : {}; }

const Page = () => {
  return ( 
    <div  className={classes.main}>
      <div className={classes.container}>
       <div className={classes.header}>
          <div className={classes.deco1}></div>
          <div className={classes.logo}>
            {/* 设置图标 */}
            <YuqueFilled   style={{fontSize:"32px",color:" rgba(56, 138, 247, 1)"}} />
            <p>creative.</p>
          </div>
          <div className={classes.nav}>
          <ul>
            <NavLink to="/todo"style={Active} >ToDo</NavLink>
            <NavLink to="/" style={Active}>About</NavLink>
            <NavLink to="/contact" style={Active}>Contact</NavLink>
            </ul>
          </div>
          <div className={classes.rest}> 
            <AppstoreTwoTone style={{fontSize:"16px",marginRight:"2px"}} />
            <span style={{fontSize:"12px",color:" rgba(56, 138, 247, 1)"}}>START PROJECT</span>
          </div>
       </div>
       <div  className={classes.footer}>
       </div>
       </div>
    </div>
   );
  
}
 
export default Page;