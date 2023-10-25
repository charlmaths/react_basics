// new react component

/*
If we were going to do this normally without yarn or default settings we would need:

import React from "react"
import ReactDom from "react-dom"

then at the bottom:

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
---->this is where the component will go
  </React.StrictMode>
);


*/

function Header() {
  return (
    <header>
      <h1> Head title of the page</h1>
      <nav>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return <footer>2023 - C.Martinez</footer>;
}

function MainContent() {
  return (
    <div>
      <ul>
        <li>reason 1</li>
        <li>reason 2</li>
        <li>reason 3</li>
      </ul>
    </div>
  );
}

function CustomPage1() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default CustomPage1;
