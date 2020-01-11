import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

// Notification.requestPermission().then(function(permission) {
//   Notification.getToken().then(res => console.log(res));
// });

ReactDOM.render(<App />, document.getElementById("root"));
