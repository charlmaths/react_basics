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

function CustomPage1() {
  return (
    <div>
      <h1> I like React</h1>
      <ul>
        <li>reason 1</li>
        <li>reason 2</li>
        <li>reason 3</li>
      </ul>
    </div>
  );
}

export default CustomPage1;
