1.Wrote a simple js program to print Namaste Everyone in h1 tag inside div container with id  root.
  -> used js engine's browser API called document to create h1 element and appendChild to append it to root div
  const heading = document.createElement("h1");
  heading.innerHTML = "Namaste Everyone";
  const root = document.getElementById("root);
  root.appendChild(heading);

  
2. Wrote the same program using React 

  -> Add script for react cdn link in body of index.hmtl 
  -> create app.js and move our js script there
  -> Now, write the same script in react

  A `react element` is object with properties which is created by React library
  const heading = React.createElement("h1", {}, "Namaste Everyone");

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);

  render() function will override the content of the root if there is any content already present in root container

  so until the root is rendered, if we want to display some error message, it can be written in html.

  what if we need to put more elements inside the root container - pass array of react elements to the container creation

  const heading1 = React.createElement("h1", {id : "title"}, "Namaste Everyone");
  const heading2 = React.createElement("h2", {id : "sub_title"}, "Welcome");

  const container = React.createElement("div", {}, [heading1, heading2]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);

3. Created a style.css file and linked to index.html 

4. Learn about arrow function for tomorrow's class

`React.createElement(tag name, attribute or props, children.)`
`createElement` lets you create a React element. It serves as an alternative to writing `JSX.`
const element = createElement(type, props, ...children)
Creating an element without JSX 
If you don’t like JSX or can’t use it in your project, you can use createElement as an alternative.
To create an element without JSX, call createElement with some type, props, and children:
import { createElement } from 'react';


<!-- React——is just a piece of  javascript code
2cdn—>react,reactDOM
1.React.createElement()
2.ReactDOM.createRoot()——this tells react what is the root element in my app .ie,div root
React element is an object.

React will run in root only.if u want to run react in header consider header as root.
React.createElement==>this is the api used instead of jsx..it returns a element.in 

https://youtu.be/MPKkPJ70dVk -->
