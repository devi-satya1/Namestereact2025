// const heading= React.createElement("h1",{id:"heading",xyz:"abc"},"hello world from react!");
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
import React from "react";
import ReactDOM from "react-dom/client"
const heading= React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child",key:"child1"},React.createElement("h1",{},"hello from h1 tag")),React.createElement("div",{id:"child2", key:"child2"},React.createElement("h2",{},"hello from h2 tag"))])
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);