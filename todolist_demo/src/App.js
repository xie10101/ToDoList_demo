import React from "react";
import List from "./components/List/List";
import "./App.css";
import Page from "./page/index";
import Text from "./page/Text";
import Contact from "./page/Contact";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Note from "./page/Note";
import Clock from "./page/Clock";
const App = () => {
  const location = useLocation();
  return (
    <>
      <div className="App">
        <Page></Page>
      </div>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={300}
          classNames="page-transition"
        >
          <Routes>
            <Route path="/" element={<Text></Text>}></Route>
            <Route path="/todo" element={<List></List>}>
              <Route path="note" element={<Note></Note>}></Route>
              <Route path="clock" element={<Clock></Clock>}></Route>
            </Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default App;
