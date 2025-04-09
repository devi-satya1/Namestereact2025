// const heading= React.createElement("h1",{id:"heading",xyz:"abc"},"hello world from react!");
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const heading= React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},React.createElement("h1",{},"hello from h1 tag")),React.createElement("div",{id:"child2"},React.createElement("h2",{},"hello from h2 tag"))])
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);