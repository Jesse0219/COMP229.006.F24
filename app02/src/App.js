import React from 'react';
import './App.css';

function App({items}) {
  return React.createElement(
    "ul",
    { className: "ingredients"},
    items.map((ingredients, i)=>
      React.createElement("li", {key: i}, ingredients)
    )
  );
}

export default App;
