import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement(
    "div", 
    {id: "parent", class: "parent"}, 
    [
        React.createElement(
            "div", 
            {class: "child1"}, 
            [
                React.createElement("h1", {class: "heading"}, "Hello World from React child 1"),
                React.createElement("h2", {class: "heading2"}, "I am h2 tag")
            ]
        ),
        React.createElement(
            "div", 
            {class: "child2"}, 
            [
                React.createElement("h1", {class: "heading"}, "Hello World from React child 2"),
                React.createElement("h2", {class: "heading2"}, "I am h2 tag")
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);