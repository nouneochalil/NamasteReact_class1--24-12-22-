// creating react element and rendering in react_root
const heading1 = React. createElement("h1",{},"Namaste React using React")
const root_react = ReactDOM.createRoot(document.getElementById("root_react"))
root_react.render(heading1)

// nested react elements inside container div and rendering in root
//here heading2 & heading3 are react elements.basically these are objects.
const heading2 = React.createElement("h1",{id:"title1"},"Namaste react using react")
const heading3 = React.createElement("h2",{id:"title2"},"Nesterd react elements.")
const root_nested = ReactDOM.createRoot(document.getElementById("root_nested"))
const container = React.createElement("div",{id:"content"},[heading2,heading3])

//render used to manipulate DOM

root_nested.render(container)