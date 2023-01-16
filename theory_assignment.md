1. What is Emmet ?
#Ans:Emmet is a free add-on for your text editor. It allows you to type shortcuts that are then expanded into full pieces of code. By using Emmet, developers type less, they save both on keystrokes and time.
2. Difference between library and framework ? 

 `Library` - collection of pre-defined helper functions, objects, classes, modules that can be used in code to boost the development.
   By using a library, you can control the flow of the application and call the library.
   `Eg: React, JQuery, Lodash`

 `Framework` - Foundation upon which applications are built.
   In contrast, when you use a framework, the control is inverted, i.e., the framework controls the flow and calls your code.
   `Eg: Node JS, Angular, Spring` 
3. What is `CDN` ? Why do we use it ?
 
 A CDN (content delivery network), also called a content distribution network, is a group of geographically distributed and interconnected servers. They provide cached internet content from a network location closest to a user to speed up its delivery.

The primary goal of a CDN is to improve web performance by reducing the time needed to send content and rich media to users.
4. Why is `React` known as `React` ?
`React` was developed for applications (Facebook) that have constantly changing data. Since React is a front-end framework or the View in MVC, this means that as the user clicks around and changes the app's data, 
the view should react or change with those user events.

5. What is cross-origin in script tag ?
`A cross-origin request `is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain. CORS is used to manage cross-origin requests.
CORS is used to manage cross-origin requests.CORS stands for Cross-Origin Resource Sharing

6. What is difference between React and ReactDOM?
`React` library contains functionality utilised in web and mobile apps (react native). `ReactDOM` library contains functionality utilised in web browser. It contains DOM manipulation utilities.reactDom displays things in web. 

7.What is the difference between react.production.js and react.development.js ?
`react.production.js` - production code of react library that is minified and production ready.
`react.development.js` - More readable and developer friendly react library code that can be   used to debug.
The development build is used - as the name suggests - for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds. The production build, on the other hand, runs in production mode which means this is the code running on your client's machine.
8.What is async and defer - check Akshay Saini's Youtube channel ?

`async` - The browser will download the script file and continue parsing HTML parallelly until the file is downloaded. The file is executed as soon as it is downloaded. `defer` - The browser will download the script and do HTML parsing at the same time.

In practice, defer is used for scripts that need the whole DOM and/or their relative execution order is important. And async is used for independent scripts, like counters or ads. And their relative execution order does not matter.