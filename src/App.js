import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <React.StrictMode>
      <div id="this-is-how-you-add-attribute">
        <h1>Adopt Me!</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
