import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./components/Message";
import ListGroups from "./components/ListGroups";
import navbar from "./components/NavBar";

function App() {
  const navigationComp = navbar; // To use the 'module' or 'object' we must declare the 'variables' before returns
  // To call this variable we must use {}
  return (
    <div className="App">
      <Message></Message>
      <ListGroups></ListGroups>
      <div>{navigationComp}</div>{" "}
      {/* This is how we call it - we gotta put it inside a curly bracket*/}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; // This is similar to ReactDom.render(navbar, document.getElementID(...))
