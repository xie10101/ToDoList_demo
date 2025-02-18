
import React from "react";

const ListContext = React.createContext(
    {
        // 基础数据
        list: [],
        // 增加任务
        addList: () => { },
        // 删除任务
        delList: () => { },
        // 完成任务
        finishList: () => { },
        // 搜索任务
        searchList: () => { },
    }
);
export default ListContext;
