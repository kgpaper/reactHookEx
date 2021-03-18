import React, { useRef, useEffect, useReducer, createRef, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}> {section.tab} </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
