import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/reducer/index";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>  
  </Provider>
);
/*
案例功能-记录每日任务
1. 任务列表展示
2.单项任务的增删改查
3.对任务的修改功能
4.对任务的完成状态的修改
5.对任务的完成状态的统计
-search
-List
--ListItem
*/

/*
 */
