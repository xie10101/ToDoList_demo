import React from "react";
import List from "./components/List/List";
import classes from "./App.module.css";
import { Provider } from "react-redux";
import store from "./store/reducer";
const App = () => {
  return (
    <div className={classes.App}>
      <Provider store={store}>
        <List></List>
      </Provider>
    </div>
  );
};

export default App;
