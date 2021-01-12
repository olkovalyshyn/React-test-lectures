import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import { myAction, myAction2, myAction_05 } from "./redux/actions";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

console.log("!!!store", store);
console.log("!!!store.getState", store.getState());
// console.log("!!!myAction", myAction);
store.dispatch(myAction(777));
store.dispatch(myAction(555));
store.dispatch(myAction(333));
store.dispatch(myAction_05(50505));

store.dispatch(myAction2);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
